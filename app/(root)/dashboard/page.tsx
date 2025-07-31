import HeaderBox from "@/components/navigation/HeaderBox";

export default function DashboardPage() {
  return (
    <section className="flex min-h-screen bg-gray-50">
      <main className="flex-1 p-4">
        <HeaderBox
          type="title"
          title="Dashboard"
          subtext="Welcome to your dashboard!"
        />
        {/* Add dashboard content here */}
      </main>
    </section>
  );
}
