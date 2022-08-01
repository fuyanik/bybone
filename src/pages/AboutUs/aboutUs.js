import Navbar from "../../components/1.Navbar/navbar";
import "./aboutUs.css"
import FooterCard from "./footerCard";
import allPage from "./images/allPage.jpg"
import aboutUsArrow from "./images/arrow.png"
import illüs1 from './images/illüs1.png'
import illüs2 from './images/illüs2.png'
import illüs3 from './images/illüs3.png'
import left from './images/left.png'
import MainCards from "./mainCards";
import { setGlobalState, useGlobalState } from "../../hookState.js";


const AboutUs = () => {  

  const[isTurkish] = useGlobalState("isTurkish");
     return (
        <div className="AboutUs"> 
            
            <Navbar/>
            <div className="about-us-main"> 

                    <div className="about-us-main-left">
                      
                    {isTurkish ? <h2 > Misyonumuz</h2>  : <h2 > Our Mission</h2> } 
                    {isTurkish ?  <p>Şirketimizin yetenek ve kapasitesi doğrultusunda, müşterilerimizin tüm hizmet beklentilerini dünya standartlarında karşılamak

Dinamik bir ekip çalışması ile hızlı, rekabetçi ve müşterilerimizin beklentilerini karşılayan hizmetler sunmak

Ülke ve bölge ekonomisine katkıda bulunmak

Mevcut ve yeni hizmetlerimiz ile faaliyet bölgelerimizin gelişiminde önemli roller alarak, sürekli girişimci olmak

Yenilikçi bir şirket olarak, geleceği şekillendirme arzusu ve insanlığa faydalı olan yenilikler üretme konusundaki kararlılığının arkasında durmak

İnsana odaklı çalışmayı temel almak

Tüm kalite planlarını müşteri memnuniyetine dayandırmak

Konusunda uzman personel kadrosu ile çalışmayı ilke edinmek

                       Yalnızca bulunduğu bölgede değil ülke çapında bir marka olmak</p>  :<p>To meet all service expectations of our customers at world standards, in line with the talent and capacity of our company.

To provide fast, competitive services that meet the expectations of our customers with a dynamic teamwork.

Contributing to the national and regional economy

Being an entrepreneur constantly by taking important roles in the development of our current and new services and our operating regions.

As an innovative company, we stand behind its desire to shape the future and its determination to produce innovations that benefit humanity.

Based on human-oriented work

Basing all quality plans on customer satisfaction

Adopting the principle of working with expert staff


Being a brand not only in its region but also throughout the country
</p> } 
                    

                    </div>
                    
                      <div className="about-us-main-center">
                      {isTurkish ? <h2 > HAKKIMIZDA</h2>  :   <h2> ABOUT US</h2> } 
                     
                    <img src={allPage} className="about-us-image" alt="logo"  />

                     </div>
                   
                   
                   <div className="about-us-main-right"> 
                   {isTurkish ?  <h2> VİZYONUMUZ</h2> :   <h2> Our Vision</h2> } 
                    
                 {  isTurkish ?   <p>Müşterilerimiz ve üretim ortaklarımızla karşılıklı ve sürdürülebilir büyümeyi gerçekleştirmek

Sektörümüzde, uyguladığımız sosyal sorumluluk ilkeleri ile uluslar arası alanda belirleyici olmak

Son teknoloji ve süreç uygulamaları ile sektöre yeni hizmetler sunmak ve lider konumda olmak

Tedarik zinciri boyunca yer alan tüm süreçlerimizi bilişim teknolojileri ile entegre ederek müşterilerimizin artan servis ihtiyaçlarına cevap vermek

Üretim süreçlerini kısaltmak için müşterilerimiz ile ilişkilerimizi sürekli hale getirmek

Süreç odaklı kalite yönetim sistemini uygulamak</p>  : <p> Realizing mutual and sustainable growth with our customers and production partners

To be a determinant in the international arena with the social responsibility principles we apply in our sector.

To provide new services to the sector with the latest technology and process applications and to be in a leading position

To respond to the increasing service needs of our customers by integrating all our processes along the supply chain with information technologies

To make our relations with our customers permanent in order to shorten the production processes


Implementing a process-oriented quality management system</p>} 
                    </div>
        
          
           </div>  

           <div className="about-us-footer"> 
           
           <FooterCard
           logo={illüs2}
           header={ isTurkish ? "Rekabet" : "Competition" }
           
           text={isTurkish ?"Amacımız müşterilerimizin beklentilerine tamamiyle cevap verebilmek, firmamızın rekabet ve gelişim gücünü arttırabilmektir." : "Our aim is to fully respond to the expectations of our customers and to increase the competitiveness and development power of our company."}
           /> 

           <img src={aboutUsArrow} className="about-us-footer-arrow" alt="logo"  />
           <FooterCard
           logo={illüs1}
           header={ isTurkish ? "Sıfır Hata" : "Zero Mistake" }
           text={ isTurkish ? "Hizmette hedefimiz “İlk Seferde Doğru Yapmak” ve “Sıfır Hata”dır. İmal etmekte olduğumuz ürünlerin zamanında, eksiksiz ve problemsiz olarak teslim edilmesi vazgeçilemez bir ilkedir." : "Our goal in service is Doing it Right the First Time and Zero Mistakes. It is an indispensable principle that the products we manufacture are delivered on time, completely and without any"}
           
           
           /> 
           <img src={aboutUsArrow} className="about-us-footer-arrow" alt="logo"  />

           <FooterCard
            logo={illüs3}
            header= { isTurkish ? "Gelişim" : "Development" }
            text={isTurkish ? "Ar/Ge ve Hizmet Geliştirme faaliyetlerindeki hedefimiz; bilgimizi ve yaratıcılığımızı sürekli olarak geliştirerek, müşteri memnuniyeti ve rekabet için etkin hizmetler tasarlamaktır.": "Our goal in R/D and Service Development activities; is to design effective services for customer satisfaction and competition by constantly improving our knowledge and creativity."}

       
           
           /> 
           
           </div>
          
          
          
         </div>
     
   
   
        )
}

export default AboutUs;