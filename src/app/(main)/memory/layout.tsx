
export default function layout({
    children
}: {children : React.ReactNode}) {
  return (
    <div className="scroll-smooth">{children}</div>
  )
}
