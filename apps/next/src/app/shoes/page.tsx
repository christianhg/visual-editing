export default async function ShoesPage() {
  return <p>{process.env.NEXT_PUBLIC_VERCEL_ENV || 'development'}</p>
}