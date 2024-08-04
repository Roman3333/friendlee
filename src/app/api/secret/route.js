import { NextResponse } from 'next/server';
import { redirect } from 'next/navigation';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const key = searchParams.get('key');

  if (!key) {
    return NextResponse.json({ error: 'Missing key parameter' }, { status: 400 });
  }

  redirect(`/?key=${key}`);
}
