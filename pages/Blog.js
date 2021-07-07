import React from "react";
import dynamic from "next/dynamic";
import Skeleton from "react-loading-skeleton";

import PageTitleBox from "../components/PageTitleBox servicos/PageTitleBox";
import OurTeamLoader from "../components/OurTeam/OurTeamLoader";
//import OurTeam from "";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
const OurTeam = dynamic(
  () => import("../components/OurTeam/OurTeam.container"),
  {
    loading: () => <OurTeamLoader />,
    ssr: false,
  }
);

export default function Blog() {
  return (
    <>
      
      <section id="cta" class="cta">
      <div class="container">

      <div class="col-md-6 px-0">
            <h1 class="display-4 font-italic">Blog Grupo Easy care.</h1>
            <p class="lead my-3">
              Acompanhe nossas atualização em nosso blog.
            </p>
          <a class="cta-btn" href="#">Mais post</a>
        </div>

      </div>
    </section>
    
      <div className="container">
        <div class="row mb-2">
          <div class="col-md-6">
            <div class="card flex-md-row mb-4 shadow-sm h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <strong class="d-inline-block mb-2 text-primary">
                  Easy care
                </strong>
                <h3 class="mb-0">
                  <a class="text-dark" href="#">
                    Móveis planejados
                  </a>
                </h3>
                <div class="mb-1 text-muted">Nov 2020</div>
                <p class="card-text mb-auto">
                  Esteja atento as maiores tendências de decoração de interiores
                  para 2021 que vão dar uma cara nova à sua casa. […]
                </p>
                <a href="#">Continue lendo</a>
              </div>
              <img
                class="card-img-right flex-auto d-none d-lg-block"
                src="../images/blog-1.jpg"
                alt="Card image cap"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="card flex-md-row mb-4 shadow-sm h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <strong class="d-inline-block mb-2 text-success">
                  Energia Fotovoltaica
                </strong>
                <h3 class="mb-0">
                  <a class="text-dark" href="#">
                    Projeto{" "}
                  </a>
                </h3>
                <div class="mb-1 text-muted">Nov 11</div>
                <p class="card-text mb-auto">
                  Soluções em energia fotovoltaica para reduzir os seus gastos,
                  e preservação, e conservação ambiental. […]
                </p>
                <a href="#">Continue lendo</a> 
              </div>
              <img
                class="card-img-right flex-auto d-none d-lg-block"
                src="../images/blog-2.jpg"
                alt="Card image cap"
              />
            </div>
          </div>
        </div>
      </div>
      <main class="container">
  <div class="p-4 p-md-5 mb-4 text-white rounded bg-dark">
    
  </div>
      <div class="row g-5">
    <div class="col-md-8">
      <h3 class="pb-4 mb-4 fst-italic border-bottom">
        From the Firehose
      </h3>

      <article class="blog-post">
        <h2 class="blog-post-title">Tendências de decoração para 2021</h2>
        <p class="blog-post-meta"> 01 de Junho, 2021 <a href="#">Mark</a></p>

        <p>Esteja atento as maiores tendências de decoração de interiores para 2021 que vão dar uma cara nova à sua casa.

Viramos a página de 2020 e recebemos 2021 com esperança, otimismo e energia renovada. Basta percebermos com positividade tudo isso e poderemos imprimir em nossos ambientes ares de felicidade e alegria. A cada ano que passa, vem uma chance de fazer coisas novas, como se tivéssemos diante de uma lousa limpa, e talvez nunca antes sua casa precisasse tanto de uma renovação como agora. Concorda?
</p>
        <hr/>
        <p>O ano que passou nos fez olhar para os nossos ambientes de casa sem nenhuma motivação para analisar e mudar a disposição dos objetos, as cores das paredes e móveis, ou de apenas dispensar um objeto aqui e ali que estariam só amontoando o ambiente.

Depois de um ano inteiro olhando para as mesmas paredes, é provável que agora queiramos uma pintura nova, ajustar um pouco mais a decoração ou talvez até fazer uma reformazinha. Influenciados por tudo, desde a moda popular até os modos de vida, os interiores seguem suas sugestões do pulso coletivo.

Novas tendências de design estão surgindo todos os dias com base na necessidade e circunstância —  à medida que todos nós aprendemos a navegar nessa nova situação emocional em que nos encontramos. Para repaginar o interior da sua casa, encontre inspiração nas novidades que preparamos agora para vocês.
</p>
        <h2>MENOS É MAIS</h2>
        <p>A simplicidade e a praticidade vieram na carona dos ambientes funcionais minimalistas, logo o que está na moda é analisar todo o ambiente e decidir nos elementos que o compõem, desde tecidos, madeiras, metais, vidros, móveis e cores, rever toda a funcionalidade conjunta e remover da vista os não essenciais e reorganizar conforme as novas prioridades.

Portanto, o que impera neste momento é você ter mais funcionalidade com menos elementos visuais. É preciso, antes de concluir a disposição de tudo, fazer uma programação de visita aos cômodos periodicamente e observar com novos olhos e analisar em busca definir algo que pode ficar sem a cada visita, assim você fará novas ações de simplificação dos elementos.</p>
        <blockquote class="blockquote">
          <p>CORES.</p>
        </blockquote>
        <p>A Pantone é uma empresa sediada em Carlstadt, estado de Nova Jersey, nos Estados Unidos. É mundialmente conhecida por seu sistema de cores, largamente utilizado na indústria gráfica e à ela é sempre demandada pela indústria a definição das cores predominantes a cada ano. No ano de 2021 a Pantone já disse que as cores são o amarelo e o cinza.

Mas deixando um pouco de lado o que a indústria determina e olhando mais para o gosto de quem consome e vendo os momentos dessa relação consumidor e cores, podemos dizer que a cor cinza ainda pode ser a opção neutra para muitos interiores, mas este ano a cor será mais ousada.

Cores mais ousadas são vistas, tanto nas paredes quanto nos móveis, principalmente nas coleções de sofás. Os ambientes residenciais estão tendendo a cores mais populares do que nunca, por meio do roxo, azul marinho e o brilhante verde esmeralda, todas cores essenciais para 2021.

O ambiente pode estar decorado sobre um fundo branco, mas ser complementado com cores revigorantes. A aparência é refrescante e com ar ousado o que cria um ar mais jovem.
</p>
        <h3>AMBIENTES INTEGRADOS</h3>
        <p>A influência do estilo americano de integração ainda é muito forte quando se trata de ambientes como sala de jantar integrada à sala de estar, ou mesmo quando vemos a tão conhecida integração da sala de jantar com a cozinha. Mas o que nos fez perceber a importância da integração de ambientes numa casa foi a necessidade do home-office durante a pandemia.

O ano passado foi marcante quando fizemos do nosso lar um ambiente multifuncional seja no uso de um espaço múltiplo seja na sala, no quarto ou na biblioteca. Adicionamos espaços dedicados ao trabalho na sala de estar, ou espaços dedicados ao aprendizado nas nossas áreas de refeições e também nossos quartos tornaram-se um espaço para exercícios físicos.

Neste ano, esses espaços sofrerão repaginação para adaptar mais funcionalidades ainda ou melhorá-las, porque os ambientes integrados vieram para ficar. Portanto, abra as janelas para respirar ar puro, desligue o ar-condicionado de vez em quando e deixe entrar a brisa.
</p>
        <ul>
        <blockquote class="blockquote">
          <li>MADEIRAS</li>
          </blockquote>
          <li>O tom mais escuro das madeiras tem começado a invadir o interior das casas, mudando radicalmente as influências dos países escandinavos quando se tratava de madeira de conceito minimalista de linhas retas e cores claras e neutras.

Os tons mais escuros ressurgem com uma sensação de glamour, uma linha retrô, mas com design luxuoso e linhas modernas com o uso de matéria prima reutilizável, dando ao lar um ar de sustentabilidade muito em voga atualmente.

A madeira combina facilmente com vários estilos de decoração e é aplicável em pisos, paredes, como revestimento, mas, principalmente nos móveis em ambientes que possam usufruir de sua característica acolhedora valorizando o espaço e o ambiente aplicado.
</li>
<blockquote class="blockquote">
          <li>TECIDOS</li>
          </blockquote>
        </ul>
        <p>Por um bom tempo os tecidos ficaram à margem, mas retornaram com força, principalmente as estampas floridas, com ar de natureza e cores também. As estampas denotam apego ao botânico, ao vegetal. Percebe-se o ambiente como se tivesse sido tirado de um material de desenho a ser colorido ou de uma coleção de plantas e vegetais. Uma tendência muito forte este ano.

Claro e, como sempre vemos, esses elementos de texturas de tecidos aparecerão nas cortinas das salas e quartos, nas roupas de quarto, mesa, banho e nas almofadas de sofás e das camas.

O material sintético, como poliéster, nylon ou rayon, em função de seu péssimo mimetismo, vai perder espaço fortemente para os têxteis naturais e reaproveitados ou reciclados neste ano. Sim, com crescente conscientização sobre as questões ambientais, o uso de materiais sustentáveis e naturais será bastante predominante.

Terá destaque os tecidos de algodão orgânico, poliéster reciclado e linho de baixo impacto como os principais candidatos para as tendências de 2021.
</p>
        <ol>
        <blockquote class="blockquote">
          <li>NATUREZA</li>
          </blockquote>
        </ol>
        <p>Biofilia significa amor à natureza (bio = natureza; philia = amor). E o termo "design biofílico" pode ser atribuído ao início dos anos 1980, quando o biólogo Edward O. Wilson delineou sua filosofia de biofilia.

Muitas pessoas foram profundamente atingidas pela pandemia e isso traz questões ambientais em destaque. Por isso, estão mais desesperadas do que nunca por usufruírem de um mundo com cara de natureza exterior.

Essa ânsia pela relação com a natureza pode se expressar de diferentes maneiras. Alguns optam por pequenos nichos de plantas, outros criam ambientes abertos internos, quando existe espaço para isso, e tem os que criam jardins verticais para dar um ar refrescante ao ambiente.

Espera-se que mais materiais orgânicos também predominem no design de interiores de 2021, como o bambu desempenhando um papel dominante.

</p>
        <dl>
        <blockquote class="blockquote">
          <li>METAIS</li>
          </blockquote>
          <dd>A grande e principal impressão no uso do metal em ambientes residenciais ao ser utilizado em projetos é que ele dá uma pegada mais moderna aos ambientes interiores remetendo-nos, inclusive, a um ambiente futurístico.

Os tons mentalicos mais usados serão o bronze sendo adotado aos poucos, em seu formato mais industrial, aliado ao aço preto junto com metais polidos como latão, níquel pólido e prata que estão ressurgindo. A mistura de metais quentes e frios, como ferro e bronze, também continuará a ser utilizada.

Esse luxuoso toque metálico sempre esteve em voga no uso de metais em ambientes residenciais com a diferença que: a partir deste ano de 2021, os tons do acabamento metálico predominante serão o bronze e ouro rosa.

Detalhes em móveis, espelhos e acessórios em bronze contribuem para agregar um acabamento luxuoso a qualquer ambiente. O rosa suave e o verde esmeralda acentuam perfeitamente os tons dourados.
</dd>
<blockquote class="blockquote">
          <li>AUTOMAÇÃO</li>
          </blockquote>
          <dd>Temos visto alguns dispositivos de assistentes digitais, como a Alexa da Amazon e o Google Assistente da Alphabet, sendo impulsionados pela transformação digital em todos os setores para promover a menor interação humana física com os objetos das casas e melhorando soluções de trabalho doméstico. 

Mas nada disso significa automação residencial como veremos no decorrer deste ano. As assistentes são apenas a ponta do iceberg do que está por vir. A segurança é uma tendência líder no setor de casas inteligentes. O uso de IA (inteligência artificial) em sistemas de segurança e acesso proporciona aos residentes maior proteção para suas casas.

O avanço das inteligências artificiais fez surgir equipamentos bastante sofisticados, como os de reconhecimento facial, alarmes de portas e janelas, fechaduras remotamente controladas, alarmes anti-roubo ultramodernos. Todo esse arsenal de ferramentas de monitoramento e segurança proporcionam tranquilidade para os residentes tanto no ambiente interno como externo. 

Esta é a tendência no que se chama domótica, o termo usado para caracterizar a integração dos mecanismos automáticos de um espaço residencial, simplificando o quotidiano das pessoas, satisfazendo necessidades de comunicação, de conforto e segurança. 

Se sua casa tiver um termostato inteligente, luzes e fechaduras podem ser criados para definir sua casa para a temperatura ideal, garantir que as luzes estejam apagadas e as portas trancadas quando você sair de casa para o trabalho. Quando você voltar, sua casa já pode estar aquecida à temperatura perfeita e as luzes estarão acesas para recebê-lo assim que sua porta for destrancada. Tudo isso sem que seja preciso tocar qualquer coisa.
</dd>
        </dl>
        <h2>ESPAÇO HOME OFFICE</h2>
        <p>Como já analisado acima, os espaços foram sendo transformados para assumirem duas e às vezes três funcionalidades ao mesmo tempo, foi o que falamos sobre a integração de ambientes. Isso desencadeou na área de design de móveis e ambientes ações de integração voltadas ao home office.

Há muito tempo essa modalidade já existe, mas muitos resistiam à sua adoção por não terem percebido vantagens nesse formato. Mas com a pandemia, foi forçoso que essa modalidade passa a ser adotada em quase a totalidade das atividades profissionais.

Trabalhar em casa é quase um esteio para a maioria das pessoas e, como resultado, a ideia do home office está evoluindo e ganhará mais força neste ano de 2021. Antes as pessoas se arranjavam para trabalhar ocasionalmente no balcão da cozinha ou em um recanto em outros ambientes da casa. Mas agora elas precisam de um espaço dedicado para um home office em pleno funcionamento.

Esses escritórios domésticos, muitas das vezes simples, mas alguns até completos, incluem espaços para no mínimo três estações de trabalho, contando inclusive com ferramentas avançadas de armazenamento digital compartilhado. Além disso, as pessoas agora estão procurando ter seus escritórios em casa evocando uma sensação de calma, portanto, o design mudou substancialmente, pois está focado no ambiente e no humor, equilibrando a vida doméstica e profissional no mesmo prédio.
.</p>
        <h2>ILUMINAÇÃO</h2>
        <p>Se houver condições, o ideal e fundamental é que a luz natural seja o máximo aproveitada e inunde todos os ambientes, permitindo que a luz transforme os espaços internos. As luzes de teto devem ser colocadas cuidadosamente, habilmente projetadas e elaboradas para transformar os ambientes. A iluminação se tornará um ponto de partida para o design ao invés de ficar para o fim.

Na hora de cuidar da iluminação dos ambientes da casa, deve-se escolher as lâmpadas como se escolhesse um acessório de roupa. Quer dizer, as lâmpadas também podem ser um elemento decorativo que agregue valor ao ambiente. A lâmpada também vai dar o tom do clima do ambiente.

Deixe de lado o velho hábito de centralizar o elemento de iluminação e passe a espalhar os pontos de luz pelos ambientes, nos cantos, nos móveis. Pode se utilizar de jogo de luz ou pontos focais de iluminação provocando efeito de sombra estrategicamente estudado. Utilizando-se de controles de múltiplas funções, como vimos em automação.

E essa é a nossa contribuição para tornar a sua vida mais alegre, mais feliz, mais positiva. Pegue essas pequenas ideias e as transforme em grandes realizações. Utilize essas sementes de inspiração que plantamos aqui e transforme sua casa em um lar doce lar com muito conforto e segurança. 
</p>
      </article>

      <article class="blog-post">
        <h2 class="blog-post-title">Como adotar o minimalismo em casa? 4 passos que vão te ajudar a se beneficiar desta prática e maximizar seu espaço e tempo livre!</h2>
        <p class="blog-post-meta">23, Junho  2021  <a href="#">Grupo Easy care</a></p>

        <p>Sabe aquela casa que quando você visita seu pensamento “fala” internamente: wowww! Então, gostaria de ter essa mesma sensação ao olhar a sua?</p>
        <blockquote>
          <p>Nesse post nós vamos falar um pouco sobre minimalismo, uma prática não tão nova, mas que vem ganhando muita força em nossos dias e, com certeza, será muito aplicada num futuro bem próximo.
 
 Ser minimalista é adotar ao pé da letra o famoso “menos é mais”.  O princípio do minimalismo é reduzir ao máximo o número de elementos e recursos da sua vida, fazendo assim com que a sua organização física, visual e mental, possam exigir menos de você.  Agora, se você se considera uma pessoa extremamente materialista, também vai precisar praticar o desapego. 
  
 Praticar o desapego é a parte mais difícil do minimalismo.  Não que seja impossível, mas é um processo rígido e pode exigir muito de você.  Primeiro, esta prática deve estar muito bem decidida internamente, na mente e na alma, caso contrário, você pode se desapontar consigo mesmo e desencadear alguns sentimentos de frustração.  E tenha certeza: não é isso que queremos! 
  
 Esse desapego começa com o seguinte pensamento:
  <strong>“menos é mais!”</strong> Aí você se pergunta:  Como assim?</p>
        </blockquote>
        <strong>Vamos lá!</strong>
        <h3>Ser minimalista ou, ter uma casa minimalista, não significa de modo algum que você vai precisar ter apenas um garfo e uma faca para cada morador, se desfazer dos seus móveis e muito menos pintar todas as suas paredes de branco.  Esse pensamento sobre o minimalismo é completamente errôneo e faz com que muitas pessoas desistam dele antes mesmo de tentar.
 
 Para os minimalistas já convictos, o lema é:
 </h3>
        <strong>“tudo o que eu possuo deve existir para algo”</strong>
        <p>Ou seja, tudo que você tem materialmente, tem que ter um significado ou uma utilidade.  
Em suma, ser minimalista é possuir somente o que você realmente precisa, seja material ou emocionalmente.  Imagine a seguinte situação: Na sua casa você possui um jogo de copos com 6 unidades para o dia a dia, mas dentro do armário você tem mais 4 copos de outros jogos que foram se quebrando com o passar do tempo. Mesmo assim, você continua os mantendo lá somente para tê-los, mas na verdade estão mesmo cheios de poeira.  Se os outros 6 te bastam, desapegar desses 4 que não têm mais sentido no seu dia a dia é praticar o minimalismo.</p>
<h2>Com isso em mente, vamos às dicas:</h2>
        <h4>1. Funcionalidade acima de tudo
</h4>

        <p>Como dissemos acima, você não vai sair por aí se desfazendo dos seus objetos sem antes fazer uma análise muito crítica.  O princípio da funcionalidade está ligado diretamente à necessidade do que você já possui ou do que pretende adquirir.  
 
 Sabe aquele multiprocessador que você nunca usa, pois além de ser difícil de lavar, você tem o hábito de cortar os seus legumes com a faca ou com um mandolin?  Então, esse multiprocessador não é funcional e ainda te consome tempo.  Se desfaça dele!
  
 Isso se aplica a tudo que você possui.  Vamos dar mais exemplos.  Veja os excessos que geralmente temos em casa:
  
 Vários jogos de talheres misturados
 Toalhas de banho que dariam para ser utilizadas por mais 2 famílias
 Excesso de almofadas nos sofás
 Tapetes guardados para substituir os que estão no uso
 Roupas de cama incontáveis, que acabamos guardando para receber visitas
 Lembranças “souvenirs” de viagens que só acumulam poeira
 Panelas em excesso, formas para bolos, potes para comida e afins
 Fios de telefone, carregadores, cabos de eletrônicos
  
 Ufa, olha quanta coisa!  Esses objetos guardados, geralmente nunca são usados, ocupam espaço e dificultam a limpeza dos móveis onde estão estocados.  
  
 Agora estamos conseguindo entender melhor o que é ser minimalista.  Você não precisa ter apenas 7 camisas e doar as outras, mas precisa se desfazer das que não utiliza.  Seu guarda-roupas ou closet além de ficar mais organizado, vai te permitir uma limpeza fácil e frequente.
  
 Veja mais alguns exemplos:  colchões infláveis, caixas de sapatos, calçados em excesso, pastas com documentos fora da validade e/ou contas pagas.  Tudo isso pode estar te atrapalhando a ter uma vida mais fácil e saudável.
  
 Pense em cada cômodo da sua casa com cautela e examine o seu dia a dia.  Você com certeza vai encontrar muitos objetos que nem se dava conta que ainda existiam, e estão aí somente para atrapalhar a sua organização e a funcionalidade do seu ambiente.
 </p>
 <h4>2. Desapego x vínculo emocional</h4>
 <p> 
Essa é uma parte muito importante do seu processo de mudança para o minimalismo.  Como fazer para me desapegar do que tenho um vínculo emocional muito forte?  Simples: <strong>não desapegue!</strong>
 
Todo nós temos algo que nos traz boas lembranças e nos conecta com alguém ou com algum momento do passado.  Seja uma coleção de disco de vinil ou de livros.  Se é importante para você e te causa uma boa sensação ao ver esses objetos ou estar próximo deles, os mantenha.  São eles que vão dar sentido à sua nova etapa nessa empreitada.  Mas aqueles outros que não te causam essa mesma sensação não devem continuar no seu espaço.  É essa divisão, do que te serve e é funcional, com o que não faz mais sentido ser mantido, que vai começar a dar significado à limpeza visual da sua casa e te tornar uma pessoa minimalista.
</p>
<h4>3. Móveis</h4>
<p>Não, você não precisa doar nem jogar seus móveis fora.  O que você precisa fazer é olhar para a sua sala e ver se tudo faz sentido.  Sabe aquela poltrona velha que está no canto da sala há anos, mas ninguém a usa?  Então, pode ter alguém precisando dela.  E é aí que entra a parte mais legal desse nosso papo.  Além de nos tornarmos pessoas mais práticas, podemos ajudar os outros.  Bom, né?
 
 Nós, por costume e tradição, temos como predefinição que toda sala de estar, por exemplo, deve ter um jogo de sofás enorme, uma mesa de jantar, um móvel para a TV, um aparador para um vaso de cerâmica, uma planta no canto, uma mesinha de centro e um tapete juntando poeira.
  
 Será que a sua sala realmente precisa disso tudo?  Para você é mais confortável assistir à TV no quarto? Você mal usa a sua TV da sala? Então, por que mantê-la?  Lembre-se:  você não precisa jogá-la fora nem doá-la, mas pode movê-la para outro lugar da sua casa onde ela será muito melhor aproveitada.  Isso também é minimalismo.
  
 Passando para a sua cozinha, imagine a seguinte situação: você tem uma mesa na cozinha e outra na sala, mas a sua família sempre faz as refeições na cozinha ou até mesmo no sofá.  Solução? Troque a mesa da sala por um futon aconchegante ou, simplesmente se desfaça dela e ganhe espaço.  Você vai ter menos um móvel para limpar e sua sala vai ficar visivelmente maior.  
  
 Este conceito dos móveis serve para todos os seus cômodos.  Olhe para seu quarto com carinho.  Se tiver algo que você não usa há meses, já sabe, né?
 </p>
 <h4>4. Substitua seus móveis por móveis planejados
</h4>
<p>Agora vou lhe dar uma solução caso você precise muito de um móvel que não utiliza com frequência, mas que porventura, uma vez ou outra, pode fazer falta na sua casa.  Vamos nessa!
 
 Pense na mesa da sua cozinha.  Pensou?  Será que ela não poderia ser substituída por uma mesa do tipo dobrável, que fica fixada na parede e você consegue desmontar quando não a estiver usando?
  
 E a mesinha do centro de sala?  Você não acha que ela pode facilmente ser substituída por uma daquelas mesas que se encaixam por baixo do aparador e são utilizadas somente quando necessário, liberando assim o trânsito no meio do seu cômodo? Com certeza sim!
  
 Hoje em dia existem diversas opções multifuncionais de móveis.  Camas que são dobradas verticalmente na parede após o uso, e se transformam em estantes com prateleiras; prateleiras de salas de estar, que quando são puxadas para baixo, viram mesa para trabalho home office ou refeições; bancos externos, para a sua varanda ou quintal, que viram mesa para as suas comemorações com a sua família e seus amigos, e até mesmo gavetas secretas que podem ser planejadas previamente e já virem embutidas em seus sofás, camas, sob suas escadas de madeira e muitos outros móveis.
  
 Legal, né?  Os móveis planejados sempre são bem-vindos quando falamos de minimalismo.  Eles dão um toque essencial na decoração da sua casa e tornam tudo muito mais prático e funcional.
 </p>
 <h4>Lembre-se sempre:</h4>
 <p>uma casa minimalista deve fazer sentido para os moradores.  Se questione:  isso faz sentido pra mim?  Posso replanejar minha cozinha e meu quarto para viver melhor?  
 
 Não se esqueça: menos é mais!
  
 Aqui no Grupo Easy Care, você conta com um time que está preparado para lhe ajudar a planejar e executar seus projetos, transformando a sua casa não funcional em uma casa minimalista inovadora e prática. Desenvolvemos os seus móveis de um jeito superespecial e só seu! Conte com a gente!
 </p>
      </article>

      <article class="blog-post">
        <h2 class="blog-post-title">3 ideias de nichos de parede para a sua casa em 2021</h2>
        <p class="blog-post-meta">maio 14, 2020  <a href="#">Grupo Easy</a></p>

        <p>Todo mundo gosta de uma casa bem arrumada e, principalmente, bem organizada, não é mesmo?  Apesar disso, muitas das vezes por comprarmos nossos objetos de decoração por impulso ou por não haver um planejamento prévio, acabamos por sobrecarregar os ambientes com informações demais e, o que antes deveria ser uma parede linda e bem paramentada, acaba virando um caos e poluindo visualmente os ambientes.
 
 Nos dias de hoje, existe no mercado do alto consumo e planejamento, uma gama infinita de acessórios e objetos de decoração que facilitam a organização e a ornamentação da sua casa.  Difícil mesmo é escolher qual é a melhor opção.  
  
 Se o seu projeto inclui deixar as suas paredes com um toque arrojado e completamente atual, eu lhe digo:  a melhor opção para isso são os nichos!
  
 Os nichos são objetos das mais variadas formas e materiais, que são instalados nas paredes e têm por finalidade organizar, separar e proteger os seus itens de decoração, coleção ou material de uso diário.  Eles podem ser produzidos sob encomenda e fixados como se fossem prateleiras, ou ainda podem ser embutidos na sua parede, caso você esteja planejando sua casa do zero e já preveja a instalação deles nos locais adequados.
  
 Eles estão sempre ali, visíveis e acessíveis.  Então, é sim possível instalar nichos em qualquer cômodo.  Nichos vão facilitar a sua vida seja no seu quarto, na sala, cozinha, banheiro ou até mesmo na área de serviço.
  
 Separamos algumas ideias para te ajudar a escolher as melhores opções para os cômodos do seu lar.  Vamos ver?
 </p>
        <ul>
          <h2>1. Nichos simples</h2>
          <img
                class="card-img-right flex-auto d-none d-lg-block"
                src="../images/blog-2.jpg"
                alt="Card image cap"
              />
          <li>Os nichos simples podem ter várias formas, mas o mais utilizado é o quadrado.  Porém, você não precisa se prender a isso.  É possível solicitar uma produção de um nicho no formato que desejar.  Eles podem ser redondos, retangulares, hexagonais e de muitos outros formatos.  O material mais utilizado para a sua confecção é o MDF.
 
 Nichos simples servem para dar destaque a um objeto importante, evidenciar seus livros, plantas e tudo mais que você julgar que deva ganhar um cantinho especial na sua parede.
  
 No banheiro, você pode utilizá-los para expor difusores de essências aromatizantes, perfumes e outros acessórios.
  
 É possível utilizar um, dois ou mais nichos nivelados vertical ou horizontalmente na mesma parede.  Com isso, você vai ser capaz de compor um ambiente inteiro e dar vida a elas.  
  
 Caso seja de sua preferência, os nichos também podem ser instalados sem seguir uma linha reta.  Deixe sua imaginação fluir e os espalhe pelos espaços vazios das paredes.  O resultado será incrível.
 </li>
          <h2>2. Nichos agrupados</h2>
          <img
                class="card-img-right flex-auto d-none d-lg-block"
                src="../images/blog-2.jpg"
                alt="Card image cap"
              />
        </ul>
        <p>Agrupar nichos é uma ótima ideia para construir formas das mais variadas.  Neste caso, você pode utilizar os nichos quadrados, quadrados com retangulares e os hexagonais, que são os que mais surtem efeitos diferentes.
 
 Pela sua forma muito peculiar, os nichos hexagonais (com seis lados), desde que sejam todos produzidos no mesmo tamanho, se encaixam perfeitamente uns aos outros.  As possibilidades de criação com eles são inúmeras.  Ao final, ficam parecendo uma colmeia.  Puro requinte!
  
 Mas atenção! Antes de colocar a mão na massa, é preciso planejar como será a sua composição de nichos hexagonais.  Você pode agrupar quantos nichos desejar e até mesmo misturar as cores.  Saia do tradicional e tenha certeza de que eles darão uma ótima impressão às suas paredes.  Os nichos hexagonais são versáteis e se adaptam a qualquer ambiente.  Não tenha medo de ousar!
 </p>
 <h2>3. Estante de nichos</h2>
 <p>Agora me diga: Por que utilizar apenas um nicho, se você pode uni-los num projeto prévio e ter uma estante mega elegante?  As estantes feitas de nicho estão em alta e com elas você consegue aproveitar alguns cantos da sua casa que antes pareciam impossíveis.  Um ótimo exemplo são os “espaços mortos” sob as escadas, no caso da sua casa ter mais de um pavimento.
 
 Esta opção de nicho é mais complexa e não basta ir à uma loja e comprar vários nichos e anexar um ao outro na parede.  Uma estante feita de nichos requer um projeto cuidadoso e uma medição precisa.  É para isso que estamos aqui.  Para te ajudar a ter o melhor dos projetos para a sua casa, com a qualidade e a pontualidade que somente o Grupo Easy Care tem.
  
 Te ajudamos com os seus nichos desde o planejamento até a instalação.  
 </p>
        

      </article>

      <nav class="blog-pagination" aria-label="Pagination">
        <a class="btn btn-outline-primary" href="tel:613975-1779">Peça seu orçamento:  61 3975-1779</a>
      </nav>

    </div>

    <div class="col-md-4">
      <div class="position-sticky" style={{top: `2rem;`}}>
        <div class="p-4 mb-3 bg-light rounded">
          <h4 class="fst-italic">Grupo Easy Care</h4>
          <p class="mb-0">Estamos há 5 anos no mercado empenhados na prestação de serviços de móveis planejados, pedras esculpidas e, atualmente, trabalhamos com engenharia, automação residencial, energia fotovoltaica e serviços financeiros. Nosso time de profissionais tem o objetivo de garantir a satisfação do cliente com um trabalho próximo e constante, como um verdadeiro parceiro na construção e realização dos sonhos.</p>
        </div>

        <div class="p-4">
          <h4 class="fst-italic">Moveis Planejados</h4>
          <ol class="list-unstyled mb-0">
            
          </ol>
        </div>

        <div class="p-4">
          <h4 class="fst-italic">Energia fotovoltaica</h4>
          <ol class="list-unstyled">
          </ol>
        </div>
      </div>
    </div>
  </div>
  </main>
  
    </>
  );
}

<div className="row special-list">{Blog}</div>;
