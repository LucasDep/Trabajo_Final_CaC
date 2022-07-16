const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

//Show Sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

//close Sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

//Change Theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

//Fill orders in table
Orders.forEach(order => {
   const tr = document.createElement('tr');
   const trContent = `
                       <td>${order.productName}</td>
                       <td>${order.productNumber}</td>
                       <td>${order.paymentStatus}</td>
                       <td class="${order.shipping === 'Declined' ? 'danger' : order.shipping === 'Pending' ? 'warning' : 'primary'}">${order.shipping}</td>
                       <td class="primary">Details</td>
                       </tr>
                       `;

   tr.innerHTML = trContent;
   document.querySelector('table tbody').appendChild(tr);
})

//============================================================================
const appDolar = new Vue({
    el: "#appDolar",
    data:{
        dolarOficial:{},
        dolarBlue:{},
        dolarSoja:{},
        dolarCCL:{},
        dolarBolsa:{},
        bitcoin:{},
        dolarTurista:{}
    },
    created(){
        this.fetchData('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    },
    methods:{
        fetchData(url){
            fetch(url)
            .then(res => res.json())
            .then(res => {
                //console.log(res)
                
                this.dolarOficial = res[0].casa,
                this.dolarBlue = res[1].casa,
                this.dolarSoja = res[2].casa,
                this.dolarCLL = res[3].casa,
                this.dolarBolsa = res[4].casa,
                this.bitcoin = res[5].casa,
                this.dolarTurista = res[6].casa
                //console.log(res[0].casa)
            })
        }
    }

})

//============================================================================
const appNoticias = new Vue({
    el: "#appNoticias",
    data:{
        noticias:[]
    },
    created(){
        this.fetchData('https://newsapi.org/v2/top-headlines?country=ar&category=technology&apiKey=a2431f4ba5a146f381e9965ba2b21e37')
    },
    methods:{
        fetchData(url){
            fetch(url)
            .then(res => res.json())
            .then(res => {
                //console.log(res.articles)
                
                this.noticias = res.articles
            })
        }
    }
})

//============================================================================

