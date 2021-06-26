const paras = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo molestias reprehenderit cumque corporis vel maiores delectus nesciunt, dignissimos et ut quod dolores. At omnis nesciunt modi sequi fugit libero minima odit aspernatur repellat amet soluta, molestiae placeat cupiditate. Corrupti officia sunt quia doloribus eaque numquam nostrum itaque voluptatum quasi assumenda fugit autem vitae aperiam tenetur error et ullam animi est culpa dicta repellendus ex, expedita exercitationem officiis? Doloribus totam vitae sit dolore suscipit natus ipsa expedita, rerum sunt. Beatae eaque repellendus odit voluptatibus inventore ipsam consectetur, quia et eius fugiat? Amet neque dignissimos laudantium labore pariatur reiciendis quidem adipisci illum?",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, voluptates! Odio necessitatibus aut, aperiam aspernatur voluptatibus, quidem fugiat iure recusandae accusantium dolore amet cum, quaerat ea pariatur cupiditate hic impedit! Quas facilis, quae iure porro sed quidem veniam sapiente odit voluptas atque, nesciunt molestiae reiciendis! Voluptatibus soluta itaque possimus culpa totam quod natus eos. Explicabo aspernatur esse, soluta velit tempore exercitationem. Labore, sapiente ullam ipsum voluptatem cupiditate mollitia distinctio! Similique?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam beatae eaque laboriosam voluptates, impedit eum nihil eius. Maxime, cumque fugit numquam dolore totam perspiciatis illo laboriosam, aliquid laudantium corrupti impedit animi odit ratione, praesentium aperiam assumenda corporis amet quasi recusandae.",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad beatae amet incidunt esse laboriosam consequatur fugiat quasi earum ab, vero reiciendis distinctio consectetur aliquam ipsa accusamus, voluptatem assumenda odio. In illum est distinctio sequi, eligendi, eveniet deleniti dolorum officiis maiores amet autem maxime ipsam totam vel nesciunt beatae mollitia quisquam possimus neque laboriosam assumenda perferendis. Esse illum quia, inventore dignissimos, deleniti dolores nulla, praesentium debitis nam odit illo necessitatibus. Voluptatum quos quod similique harum rerum, veritatis quaerat nesciunt alias quibusdam dolorem a consequuntur repellendus debitis accusantium atque. Velit explicabo eum vitae suscipit accusantium ipsa nemo iusto tempora. Culpa aliquid consequatur harum soluta dolorum possimus esse molestiae vitae voluptatibus! Molestiae non delectus provident. Soluta, omnis cupiditate, repellat quos, labore officia autem dolore obcaecati provident quo quod! Libero ab cumque voluptatem? Fugiat rerum eius porro corrupti accusantium. Reiciendis, enim cumque. Excepturi quibusdam quia aperiam a corrupti minus nostrum molestiae repudiandae eos cum odio quaerat optio sapiente nesciunt at atque, quam dignissimos assumenda odit nisi nihil nam illum. Quae, sapiente enim aliquid atque, nihil vitae sit facilis architecto, natus magni perferendis deleniti velit ipsam id nostrum perspiciatis culpa expedita! Nostrum, consectetur id minus, quia cupiditate expedita rerum fugiat ex voluptate illo similique laboriosam voluptas incidunt blanditiis atque molestiae saepe, odit ea repudiandae in veniam? Cum voluptatibus nobis rem maiores labore inventore aut beatae. Voluptatibus velit mollitia quisquam quibusdam doloremque nulla quam voluptas eveniet, vitae deleniti voluptates accusantium perspiciatis ut magnam aliquid esse sint repudiandae molestias nobis officiis reprehenderit magni? Eveniet nesciunt incidunt quis, aliquam, error exercitationem odit beatae ad quidem possimus nulla enim voluptatibus nemo explicabo ex accusantium mollitia eum, unde deserunt quibusdam ut ea? Repudiandae consectetur similique molestiae labore esse sit id, debitis vel velit dolorem fugit ratione pariatur quidem quam itaque quo illo earum voluptas. Facere debitis consequuntur accusamus. Dignissimos quam explicabo quod natus autem, cumque doloremque corporis neque similique architecto possimus voluptates perferendis at quo consequuntur in maiores quis provident alias incidunt corrupti debitis accusantium ullam. Animi corrupti porro similique! Sed laborum dolorum ratione modi, tempore sunt incidunt magni aut deserunt blanditiis nobis eos cum iste error possimus molestias dignissimos.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur corrupti, temporibus quibusdam quaerat et nam saepe at incidunt, quos adipisci vitae dicta obcaecati vero? Possimus voluptatem at qui cum totam corporis tempora non laudantium iste sint nisi mollitia illo similique impedit veniam quaerat perferendis natus ea nostrum voluptas dolorem, excepturi, distinctio earum. Sequi ipsam, at, fugiat in corporis sapiente velit cumque placeat enim consectetur culpa veritatis temporibus maiores laboriosam expedita ratione nulla distinctio quia cum dolor. Saepe officia laboriosam perspiciatis ipsa rerum aliquid consequatur ipsum, possimus magnam? Officiis reprehenderit corporis ea commodi qui exercitationem deleniti debitis pariatur explicabo voluptatibus maiores, illo illum dolore! Dolorum distinctio incidunt aperiam voluptates quia, quisquam deserunt inventore voluptatum laborum dolor quo accusantium hic amet debitis quibusdam beatae sunt nisi omnis!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate possimus unde aspernatur modi, voluptatibus facere placeat qui ea quam eius aut fugiat. Consequatur, tempora ea ullam obcaecati impedit accusantium labore saepe sit ad deleniti expedita, velit, recusandae possimus earum corrupti!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, sequi recusandae laudantium aliquam necessitatibus reiciendis ducimus assumenda temporibus corrupti dicta repudiandae. Dolorum nemo id quia quo at quidem ducimus earum commodi ab dolorem consequuntur eligendi modi accusamus, rem expedita praesentium suscipit neque reiciendis odit fugiat eos? Voluptatum impedit vitae quo iste quaerat consequatur, nam beatae nemo aut, totam molestias quidem animi distinctio laudantium veniam similique."
 ];


const formContainer = document.querySelector(".form-container");
const paraText = document.querySelector(".para-text");
const amount = document.getElementById("amount");

formContainer.addEventListener("submit", function(e){
    e.preventDefault(); // By default button submit at server so it will not print anything on console so to prevent this default property of form preventDefault() is used.
    const random = Math.floor(Math.random()*paras.length);

    // By default input is string so when there is no input it is empty string so inorder to identify that whether there is anything in input or not then that input value should be converted into integer so when input value is not there and then also generate button is clicked then instead of empty string it prints NaN.
    const value = parseInt(amount.value);  // isNaN(value) return true or false.
    if(isNaN(value) || value <=0 || value > 7)    // Here if we dont want to convert input into integer then we can simply write it as if(amount.value === ""){}. But if we kept it as string then we will face difficulties in slice(0,value);
    {
       paraText.innerHTML = `<p>${paras[random]}</p>`;
    }
    else
    {
       let someParas = paras.slice(0,value);
       
       someParas = someParas.map(function(para){
           return `<p>${para}</p>`;
       });

       paraText.innerHTML = someParas.join("");
    }
    
});
    

