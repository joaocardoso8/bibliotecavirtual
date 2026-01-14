/*MODELO DE DADOS*/
const biblioteca = [
  {
    id: 'tec',
    nome: 'Tecnologia',
    cor: '#3498db',
    posicao: { x: -6, z: -8 },
    livros: [
      { title: 'Virtual reality basics', author: 'John Cardoso', description: 'Introduction to virtual reality concepts.' },
      { title: 'Immersive UX', author: 'NN Group', description: 'User experience in immersive environments.' },
      { title: 'WebVR development', author: 'Aframe Team', description: 'Building VR with web technologies.' },
      { title: '3D interfaces', author: 'Alan Dix', description: 'Designing interactive 3D systems.' },
      { title: 'Augmented reality', author: 'Mark Billinghurst', description: 'Concepts and applications of AR.' },
      { title: 'Metaverse systems', author: 'Matthew Ball', description: 'Understanding virtual worlds.' },
      { title: 'Human computer interaction', author: 'Ben Shneiderman', description: 'Principles of interaction design.' },
      { title: 'Game engines', author: 'Jason Gregory', description: 'Real time rendering and engines.' },
      { title: 'Simulation systems', author: 'David Freeman', description: 'Modeling and simulation basics.' },
      { title: 'Digital futures', author: 'Jeremy Bailenson', description: 'Impact of immersive technology.' }
    ]
  },

  {
    id: 'his',
    nome: 'Historia',
    cor: '#27ae60',
    posicao: { x: 0, z: -8 },
    livros: [
      { title: 'Digital history', author: 'Maria Silva', description: 'Evolution of information.' },
      { title: 'History of technology', author: 'Melvin Kranzberg', description: 'Society and innovation.' },
      { title: 'Information age', author: 'Manuel Castells', description: 'Social transformation.' },
      { title: 'Media history', author: 'Marshall Mcluhan', description: 'The medium is the message.' },
      { title: 'Modern societies', author: 'Eric Hobsbawm', description: 'Twentieth century world.' },
      { title: 'Ancient civilizations', author: 'Paul Bahn', description: 'Early human societies.' },
      { title: 'Industrial revolution', author: 'Robert Allen', description: 'Economic transformation.' },
      { title: 'Cold war', author: 'John Lewis Gaddis', description: 'Global political conflict.' },
      { title: 'European history', author: 'Norman Davies', description: 'History of Europe.' },
      { title: 'Globalization', author: 'Anthony Giddens', description: 'Modern global systems.' }
    ]
  },

  {
    id: 'lit',
    nome: 'Literatura',
    cor: '#8e44ad',
    posicao: { x: 6, z: -8 },
    livros: [
      { title: 'Interactive literature', author: 'Pedro Costa', description: 'Digital narratives.' },
      { title: 'The odyssey', author: 'Homer', description: 'Epic journey.' },
      { title: 'Divine comedy', author: 'Dante Alighieri', description: 'Journey through afterlife.' },
      { title: 'Don quixote', author: 'Miguel Cervantes', description: 'Classic novel.' },
      { title: 'Hamlet', author: 'William Shakespeare', description: 'Tragedy and revenge.' },
      { title: 'Pride and prejudice', author: 'Jane Austen', description: 'Social relationships.' },
      { title: 'War and peace', author: 'Leo Tolstoy', description: 'Historical fiction.' },
      { title: '1984', author: 'George Orwell', description: 'Dystopian society.' },
      { title: 'The trial', author: 'Franz Kafka', description: 'Absurd justice.' },
      { title: 'The stranger', author: 'Albert Camus', description: 'Existential novel.' }
    ]
  },

  {
    id: 'des',
    nome: 'Desporto',
    cor: '#263487',
    posicao: { x: -6, z: -4 },
    livros: [
      { title: 'Sports science', author: 'Timothy Noakes', description: 'Performance science.' },
      { title: 'Functional training', author: 'Michael Boyle', description: 'Modern training methods.' },
      { title: 'Aquatic sports', author: 'Pedro Costa', description: 'Water disciplines.' },
      { title: 'Football tactics', author: 'Jonathan Wilson', description: 'Tactical evolution.' },
      { title: 'Olympic games', author: 'David Miller', description: 'History of olympics.' },
      { title: 'Endurance training', author: 'Joe Friel', description: 'Endurance sports.' },
      { title: 'Sports psychology', author: 'Jim Taylor', description: 'Mental training.' },
      { title: 'Athletic performance', author: 'Vern Gambetta', description: 'Performance models.' },
      { title: 'Strength conditioning', author: 'Mark Rippetoe', description: 'Strength basics.' },
      { title: 'Injury prevention', author: 'Stuart McGill', description: 'Spine health.' }
    ]
  },

  {
    id: 'poe',
    nome: 'Poesia',
    cor: '#ca911f',
    posicao: { x: 0, z: -4 },
    livros: [
      { title: 'Collected poems', author: 'Fernando Pessoa', description: 'Selected poetry.' },
      { title: 'The shepherd', author: 'Alberto Caeiro', description: 'Nature poetry.' },
      { title: 'Sonnets', author: 'Antero Quental', description: 'Philosophical poems.' },
      { title: 'Leaves of grass', author: 'Walt Whitman', description: 'American poetry.' },
      { title: 'The Waste land', author: 'T S Eliot', description: 'Modernist poetry.' },
      { title: 'Ariel', author: 'Sylvia Plath', description: 'Confessional poetry.' },
      { title: 'Selected poems', author: 'Emily Dickinson', description: 'Introspective poems.' },
      { title: 'Milk and honey', author: 'Rupi Kaur', description: 'Contemporary poetry.' },
      { title: 'The raven', author: 'Edgar Poe', description: 'Narrative poem.' },
      { title: 'Divine songs', author: 'William Blake', description: 'Mystical poetry.' }
    ]
  },

  {
    id: 'art',
    nome: 'Artes',
    cor: '#e67e22',
    posicao: { x: 6, z: -4 },
    livros: [
      { title: 'Art history', author: 'E H Gombrich', description: 'History of art.' },
      { title: 'Modern art', author: 'Sam Hunter', description: 'Modern movements.' },
      { title: 'Visual design', author: 'Don Norman', description: 'Design principles.' },
      { title: 'Graphic design', author: 'Paul Rand', description: 'Visual identity.' },
      { title: 'Color theory', author: 'Johannes Itten', description: 'Color systems.' },
      { title: 'Photography basics', author: 'Ansel Adams', description: 'Photography principles.' },
      { title: 'Cinema studies', author: 'David Bordwell', description: 'Film analysis.' },
      { title: 'Digital art', author: 'Christiane Paul', description: 'Art and technology.' },
      { title: 'Interactive media', author: 'Lev Manovich', description: 'New media theory.' },
      { title: 'Visual culture', author: 'Nicholas Mirzoeff', description: 'Visual studies.' }
    ]
  }

];

/*LIVRO*/
AFRAME.registerComponent('book-info', {
  schema: {
    title: { type: 'string' },
    author: { type: 'string' },
    description: { type: 'string' }
  },

  init: function () {
    const el = this.el;
    const data = this.data;

    const somLivro = document.querySelector('#livro');

    const label = document.createElement('a-entity');
    label.setAttribute('visible', false);
    label.setAttribute('position', '0 0.6 0');

    const labelBg = document.createElement('a-plane');
    labelBg.setAttribute('width', '1.2');
    labelBg.setAttribute('height', '0.4');
    labelBg.setAttribute('color', '#ffffff');
    labelBg.setAttribute('opacity', '0.9');
    labelBg.setAttribute('raycaster', 'enabled: false');

    const labelText = document.createElement('a-text');
    labelText.setAttribute(
      'value',
      `📘 ${data.title}\n✍ ${data.author}`
    );
    labelText.setAttribute('align', 'center');
    labelText.setAttribute('color', '#000');
    labelText.setAttribute('width', '1.1');
    labelText.setAttribute('position', '0 0 0.01');
    labelText.setAttribute('raycaster', 'enabled: false');

    label.appendChild(labelBg);
    label.appendChild(labelText);
    el.appendChild(label);

    el.addEventListener('mouseenter', () => {
      el.setAttribute('scale', '1.2 1.2 1.2');
      label.setAttribute('visible', true);
    });

    el.addEventListener('mouseleave', () => {
      el.setAttribute('scale', '1 1 1');
      label.setAttribute('visible', false);
    });

    el.addEventListener('click', () => {
      somLivro.currentTime = 0;
      somLivro.play();
      const painel = document.querySelector('#painel');
      const texto = document.querySelector('#painel-texto');

      const paginas = [
        `📘 ${data.title}\n\n✍️ ${data.author}`,
        `Descricao:\n\n${data.description}`,
        `Paginas:\n3 \n\nTipo:\nLivro digital`
      ];

      painel.setAttribute('visible', true);
      painel.paginaAtual = 0;
      painel.paginas = paginas;

      texto.setAttribute('value', paginas[0]);
    });
  }
});

/*SECÇOES*/
AFRAME.registerComponent('biblioteca-builder', {
  init: function () {
    const root = this.el;

    biblioteca.forEach((secao) => {
      const grupo = document.createElement('a-entity');
      grupo.setAttribute(
        'position',
        `${secao.posicao.x} 0 ${secao.posicao.z}`
      );

      const titulo = document.createElement('a-text');
      titulo.setAttribute('value', secao.nome);
      titulo.setAttribute('position', '0 2.4 0');
      titulo.setAttribute('align', 'center');
      titulo.setAttribute('width', '4');
      titulo.setAttribute('color', secao.cor);
      titulo.setAttribute('raycaster', 'enabled: false');
      grupo.appendChild(titulo);

      const estante = document.createElement('a-entity');
      estante.setAttribute('estante', '');
      estante.setAttribute('position', '0 1.1 0');
      grupo.appendChild(estante);

      const espacoX = 0.32;
      const offsetZ = 0.45;
      const prateleirasY = [0.75, 1.15, 1.55];
      const livrosPorPrateleira = 4;

      const metade = Math.ceil(secao.livros.length / 2);

      secao.livros.forEach((livro, i) => {
        const livroEl = document.createElement('a-box');
        livroEl.classList.add('livro');

        const frente = i < metade;
        const indexLado = frente ? i : i - metade;

        const prateleiraIndex = Math.floor(indexLado / livrosPorPrateleira);
        const indexNaPrateleira = indexLado % livrosPorPrateleira;

        const posX =
          indexNaPrateleira * espacoX -
          ((livrosPorPrateleira - 1) * espacoX) / 2;

        const posY = prateleirasY[prateleiraIndex] || prateleirasY[2];
        const posZ = frente ? offsetZ : -offsetZ;

        livroEl.setAttribute(
          'position',
          `${posX} ${posY} ${posZ}`
        );

        if (!frente) {
          livroEl.setAttribute('rotation', '0 180 0');
        }

        livroEl.setAttribute('width', '0.25');
        livroEl.setAttribute('height', '0.45');
        livroEl.setAttribute('depth', '0.1');
        livroEl.setAttribute('color', '#2c3e50');

        livroEl.setAttribute(
          'book-info',
          `title: ${livro.title}; author: ${livro.author}; description: ${livro.description}`
        );

        grupo.appendChild(livroEl);
      });

      root.appendChild(grupo);
    });
  }
});

/*PORTA*/
AFRAME.registerComponent('open-door', {
  init: function () {
    const el = this.el;
    let aberta = false;

    const somPorta = document.querySelector('#porta');

    el.addEventListener('click', () => {
      if (aberta) return;

      somPorta.currentTime = 0;
      somPorta.play();

      el.setAttribute(
        'animation',
        'property: rotation; to: 0 -90 0; dur: 800; easing: easeOutQuad'
      );

      aberta = true;
    });
  }
});

/*FECHAR PAINEL*/
AFRAME.registerComponent('close-panel', {
  init: function () {
    const painel = document.querySelector('#painel');

    this.el.addEventListener('click', () => {
      painel.setAttribute('visible', false);
    });
  }
});

/*ESTANTES*/
AFRAME.registerComponent('estante', {
  schema: {
    largura: { type: 'number', default: 2 },
    altura: { type: 'number', default: 2.2 },
    profundidade: { type: 'number', default: 0.6 }
  },

  init: function () {
    const data = this.data;
    const el = this.el;

    const corpo = document.createElement('a-box');
    corpo.setAttribute('width', data.largura);
    corpo.setAttribute('height', data.altura);
    corpo.setAttribute('depth', data.profundidade);
    corpo.setAttribute('color', '#8b5a2b');
    corpo.setAttribute('raycaster', 'enabled: false');
    el.appendChild(corpo);

    const prateleiras = 4;
    for (let i = 1; i < prateleiras; i++) {
      const shelf = document.createElement('a-box');
      shelf.setAttribute('width', data.largura);
      shelf.setAttribute('height', '0.05');
      shelf.setAttribute('depth', data.profundidade);
      shelf.setAttribute('color', '#6e4628');
      shelf.setAttribute(
        'position',
        `0 ${-data.altura / 2 + (i * data.altura) / prateleiras} 0`
      );
      shelf.setAttribute('raycaster', 'enabled: false');
      el.appendChild(shelf);
    }
  }
});

/*PAINEL DE AJUDA INICIAL*/
AFRAME.registerComponent('fechar-ajuda', {
  init: function () {
    const painel = document.querySelector('#painel-ajuda');
    this.el.addEventListener('click', () => {
      painel.setAttribute('visible', false);
    });
  }
});

/*PAGINA PROXIMA*/
AFRAME.registerComponent('pagina-proxima', {
  init: function () {
    const somPagina = document.querySelector('#paginas');

    this.el.addEventListener('click', () => {
      const painel = document.querySelector('#painel');
      const texto = document.querySelector('#painel-texto');

      if (!painel.paginas) return;

      if (painel.paginaAtual < painel.paginas.length - 1) {
        painel.paginaAtual++;
        texto.setAttribute('value', painel.paginas[painel.paginaAtual]);

        somPagina.currentTime = 0;
        somPagina.play();
      }

    });
  }
});

/*PAGINA ANTERIOR*/
AFRAME.registerComponent('pagina-anterior', {
  init: function () {
    const somPagina = document.querySelector('#paginas')

    this.el.addEventListener('click', () => {
      const painel = document.querySelector('#painel');
      const texto = document.querySelector('#painel-texto');

      if (!painel.paginas) return;

      if (painel.paginaAtual > 0) {
        painel.paginaAtual--;
        texto.setAttribute('value', painel.paginas[painel.paginaAtual]);

        somPagina.currentTime = 0;
        somPagina.play();
      }
    });
  }
});

/*PASSOS*/
AFRAME.registerComponent('footsteps', {
  init: function () {
    const camera = this.el;
    const somPassos = document.querySelector('#passos');

    let aAndar = false;

    window.addEventListener('keydown', (e) => {
      if (['w','a','s','d'].includes(e.key.toLowerCase())) {
        if (!aAndar) {
          somPassos.loop = true;
          somPassos.volume = 0.4;
          somPassos.play();
          aAndar = true;
        }
      }
    });

    window.addEventListener('keyup', () => {
      somPassos.pause();
      aAndar = false;
    });
  }
});
