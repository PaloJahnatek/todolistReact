import './Footer.css';
import Footer from './Footer';
import './About.css';


function About() {
    return(
        <div>

            <div className="title">TodoList project Application</div>

            <div className="backend">Backend projekt je naprogramovaný v Jave vo verzii 17 a využíva framework Spring Boot.</div>
            <div className="block1">
                Na backende sú implementované všetky základné operácie CRUD (Create, Read, Update, Delete),<br/>
                ktoré umožňujú manipuláciu s dátami. <br/>
                Tieto operácie sú spúšťané pomocou príslušných HTTP požiadaviek (POST, GET, PUT, DELETE),<br/>
                ktoré sú obsluhované v tzv. REST kontroléroch. <br/>
                Výsledkom týchto operácií je poskytnutie dát vo formáte JSON, <br/>
                ktorý je ľahko čitateľný pre užívateľa a Frontendovú aplikáciu.<br/>
                Samotná Spring Boot aplikácia je nasadená na serverovom kontajneri<br/>
                Apache Tomcat vo verzii 10.1.17. <br/>

                <a href="https://github.com/PaloJahnatek/ToDoList.git">
                    Celý zdrojový kód na stiahnutie  &nbsp;
                    <i className='fab fa-github'/>
                </a>
            </div>


            <div className="backend">Frontendová časť projektu je vyvinutá pomocou ReactJS, ktorý je JavaScriptový framework.</div>
            <div className="block1">
                Vizuálny dizajn a štýly sú vytvorené pomocou HTML, CSS a Bootstrap. <br/>
                Aplikácia posiela požiadavky (requests) na backendovú časť, kde sú následne spracované. <br/>
                To znamená, že keď používateľ interaguje s webovou stránkou, <br/>
                ReactJS generuje požiadavky na backend (ktorý beží na serveri) <br/>
                na vykonanie rôznych operácií, a potom reaguje na odpovede od backendu.<br/>
                Frontend a backend spolu komunikujú, aby poskytli kompletný zážitok pre používateľa.<br/>

                <a href="https://github.com/PaloJahnatek/todolist-react.git">
                    Celý zdrojový kód na stiahnutie  &nbsp;
                    <i className='fab fa-github'/>
                </a>
            </div>

            <div className="backend">Projekt využíva databázu MySQL na ukladanie dát.</div>
            <div className="block1">
                Táto databáza je umiestnená na serveri a na prístup k dátam <br/>
                v nej slúži JDBC (Java Database Connectivity).  <br/>
                JDBC je technológia v Jave, ktorá umožňuje komunikáciu s databázou <br/>
                a vykonávanie rôznych operácií, <br/>
                ako sú čítanie, zápis alebo aktualizácia údajov v databáze MySQL. <br/>

            </div>




            <Footer/>
        </div>
    );
}

export default About;