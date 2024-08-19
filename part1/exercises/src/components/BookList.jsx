export default function BookList() {
   let pageTitle = "The Greatest Books";
   let book1 = "Eragon";
   let book2 = "Killer Whales";
   let book3 = "The Bald Eagle";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <div>
            <img src={"data:image/jpeg;base64,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"} alt="eragon" className="rsizeImg"/>
         <p>{book1}</p>
         </div>
         <div>
         <img src={"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR6Loo44ugStGwOOE6SPuvu1rsLb0tWNzWNtVQO9C01TMw8jdtEtK6UQ5r1-DOtKrH4nIMAgTU_zIBRZ4-PrrybKVy17ds1QsaoLsDT45oi&usqp=CAc"} alt="killer whales" className="resizeImg"/>
         <p>{book2}</p>
         </div>
         <div>
         <img src={"https://m.media-amazon.com/images/I/81IdfuizNsL._AC_UF1000,1000_QL80_.jpg"} alt=" the bald eagle" className="resizeImg" />
            <p>{book3}</p>
         </div>
        
      </div>
   );
}