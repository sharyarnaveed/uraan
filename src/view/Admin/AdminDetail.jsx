import React from 'react'
import "./AdminPanel.css"
import img from "../../assets/heroimg.jpg"
function AdminDetail() {
  const theimg=img
  return (
<>
<main class="main-content-detail">
      <header>
        <h1>Project Details</h1>
      </header>

      <section class="content">
        <img src={theimg} alt="Project Detail Image" class="detail-image"/>
        <h2>Project Title</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis ratione fugiat voluptatum beatae, ab accusamus eveniet velit nisi a, mollitia blanditiis, pariatur nostrum similique veniam optio aliquam consequatur dicta ex officia exercitationem. Autem necessitatibus minima vel. Corrupti at praesentium pariatur sit ab exercitationem, voluptas sed veritatis labore voluptatibus. Nesciunt, repudiandae expedita ducimus repellendus excepturi dicta molestiae. Rem harum non voluptatem, molestias illo hic culpa quisquam blanditiis praesentium quidem soluta, reiciendis, tempore unde itaque alias obcaecati nam nostrum quod sint nisi modi temporibus nulla vel sapiente! Earum modi unde natus corporis, ipsa voluptate consequatur tenetur dolorum delectus tempore? Accusantium itaque aliquid deserunt natus laborum aliquam facilis, voluptatem perferendis, obcaecati nostrum sapiente iusto eos officia dolor porro! Repudiandae, quia voluptatum? Optio debitis saepe ea corporis reiciendis quasi cum. Suscipit fuga, voluptas nostrum temporibus libero ad laboriosam ducimus consequuntur ipsa ratione laborum, illo quaerat recusandae sint atque ex sapiente? Soluta, facere doloremque? Assumenda, molestiae corrupti repudiandae repellendus nobis nesciunt quas iste qui magni architecto! Dolorum illum tenetur unde eaque, eligendi consequuntur earum inventore accusantium ipsa consectetur consequatur hic, maxime delectus, commodi facilis totam placeat enim? Repellat incidunt rerum minima cumque vel iure nesciunt perspiciatis aliquid, esse at sit, placeat blanditiis magnam accusantium cum!</p>
      </section>
    </main>

</>
  )
}

export default AdminDetail