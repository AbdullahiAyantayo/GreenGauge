import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { ChatRequest } from '../../../types';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { prompt, companies } = await request.json() as ChatRequest;

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key is not configured' },
        { status: 500 }
      );
    }

    // Format companies data for the prompt
    const companiesData = companies.map(company => ({
      name: company.name,
      description: company.description,
      sector: company.sector,
      funding: company.funding,
      founded: company.founded,
      teamSize: company.teamSize,
      location: company.location,
      keyMetrics: company.keyMetrics,
    }));

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: `You are a helpful assistant that provides information about climate tech companies. 
          You have access to the following companies data: ${JSON.stringify(companiesData)}. 
          Please provide accurate and relevant information based on this data.`,
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    const response = completion.choices[0]?.message?.content || 'No response generated';

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Chat API error:', error);
    
    if (error instanceof Error) {
      if (error.message.includes('quota')) {
        return NextResponse.json(
          { error: 'API quota exceeded. Please try again later.' },
          { status: 429 }
        );
      }
      if (error.message.includes('model')) {
        return NextResponse.json(
          { error: 'Invalid model specified. Please try again later.' },
          { status: 400 }
        );
      }
    }

    return NextResponse.json(
      { error: 'An error occurred while processing your request.' },
      { status: 500 }
    );
  }
} 