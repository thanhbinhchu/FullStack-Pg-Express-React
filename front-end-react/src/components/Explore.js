import React, { useEffect } from 'react'

export const Explore = () => {

    useEffect(() => {
      document.title = "About Us"
    }, [])
  
    return (
      <div>
        <h2 className="display-4">From dream to reality! <a href='https://tekos.net/' target="_blank">[PRESS START]</a> </h2>
        <p className="lead">
        Tekos France is the game changer in the IT offshore outsourcing market. Adhering to our strong values, we accompany our partners in the long term in order to develop their activity with high efficiency, pragmatism and authenticity.
        </p>
        <div className="lead">
        <h4>Son activité</h4>
            <p>Tekos interactive est une société de conseil en développement logiciel qui propose un haut niveau d’expertise dans différents domaines tels que le développement, le devops et le cloud computing, le développement produit, le design UX et UI.</p>
            <p>
            Spécialistes du Web, ils ont leur coeur d’expertise sur des technologies telles que JavaScript / TypeScript (ReactJS, VueJS, AngularJS, ExpressJS, Fastify, NestJS…), PHP (Symfony, Laravel…), Python (cli, django…), Amazon Web Services, Google Cloud Platform, Terraform et Kubernetes.
            </p>
        </div>

        <div className="lead">
        <h4>Sa mission</h4>
            <p>Faire passer ses clients du rêve à la réalité. Les aider à construire des logiciels de qualité sur lesquels ils pourront compter. Les accompagner dans leur croissance et leurs challenges techniques, de dimensionnement, de recrutement.</p>
            <p>
            Aider des start-up à démarrer, les aider à passer la vitesse supérieure et se transformer en scale-ups, aider des entreprises déjà bien installées à changer de stack technologique.
            </p>

        </div>

        <br/>
        <div className="row lead">

          <div className="col-sm">
            <h4>Le Chief Sales Officer (CSO)</h4>
            <p>
            Ronan, après 15 ans dans le commerce B to B, a acquis une solide expérience dans les domaines de la high-tech et du logiciel tels que : ordinateurs, serveurs, tableaux interactifs, copieurs, mais aussi logiciels métiers, de comptabilité, de gestion de paie, de gestion électronique de document ou encore la dématérialisation de courrier.
            </p>
            <p> 
            Il a non seulement été amené à manager et former des équipes de vente et de distribution, mais aussi à accompagner des start-up et scale ups dans leur vision stratégique sur leurs produits technologiques.
            </p>
            
          </div>
          <div className="col-sm">
            <h4>Le Chief Executive/Technology Officer (CEO / CTO)</h4>
            <p>
            Pierre-Emmanuel, après une double formation commerce et développement logiciel, se concentre sur sa passion : les technologies web. Avec plus de 15 ans d’expérience, Pierre-Emmanuel a occupé tour à tour les postes de développeur web, architecte, lead developer et Chief Technology Officer (CTO, ou Directeur Technique).Il apporte donc tout naturellement son expertise technique à l’équipe.
            </p>
            <p> 
            Ayant travaillé dans des secteurs d’activité couvrant une majeure partie du marché tels que l’e-commerce (B2B et B2C), les SAAS (Software As A Service) / PAAS (Platform As A Service), des plateformes à fort trafic (streaming musical haute résolution), l’eduTech, la HRTech, ou encore le management de transition, Pierre-Emmanuel est en mesure d’accompagner les clients de TEKOS.
            </p>

          </div>
        </div>

      </div>
    )
  }
  
  export default Explore