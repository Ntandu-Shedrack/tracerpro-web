import { EditUserForm } from "@/components/forms/EditUserForm";

export default function ProfilePage() {
  return (
    <div className="flex">
      <main className="flex-1 p-10">
        <EditUserForm />
      </main>
    </div>
  );
}
