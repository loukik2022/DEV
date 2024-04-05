export default function Sidemenu() {
   function handleClick() {
      localStorage.clear();
      window.location.reload();
   }

   return (
      <aside className="sidemenu">
         <div className="new-chat" onClick={handleClick}>
            <span>+</span>
            New chat
         </div>
      </aside>
    )
}