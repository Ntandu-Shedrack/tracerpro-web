import BooksTable from "@/components/tables/BooksTable";

export default function BooksPage() {
  return (
    <div className="flex">
      <main className="flex-1 p-10">
        <BooksTable />
      </main>
    </div>
  );
}
