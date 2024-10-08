import NavbarFriends from "@/components/friends/NavbarFriends";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="scroll-smooth">
      <NavbarFriends/>
      {children}
    </div>
  );
}
