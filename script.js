(() => {
    const generate = document.querySelector('.generate');
    const button = document.querySelector('button');
    const butonImg = document.querySelector('button img');
    const text = [
        ["Ja chcę powiedzieć jedną rzecz, ", "Trzba powiedzieć jasno, ", "Jak powiedział wybitny krakowianin Stanisław Lem, ", "Proszę mnie dobrze zrozumieć ", "Ja chciałem przypomnieć Państwu, że ", "Niech nie mają Państwo złudzeń, ", "Powiedzmy to wyraźnie, "],
        ["przedstawiciele czerwonej hołoty ", "ci wszyscy (tfu!) geje ", "funkcjonriusze reżymowej telewizji ", "tak zwani ekolodzy ", "ci wszyscy (tfu!) demokraci ", "agenci bezpieki ", "feminaziski "],
        ["zupełnie bezkarnie ", "całkowicie bezczelnie ", "o poglądach na lewo od komunizmu ", "celowo i świadomie ", "z premedytacją ", "od czasów Okrągłego Stołu ", "w ramach postępu ", ],
        ["nawołują do podniesienia podatków ", "próbują wyrzucić kierowców z miast ", "próbują skłócić Polskę z Rosją ", "głoszą brednie o globalnym ociepleniu ", "zakazują posiadnia broni ", "nie dopuszczają prawicy do władzy ", "uczą dzieci homoseksualizmu "],
        ["bo dzięku temu mogą kraść ", "bo dostają za to pieniądze ", "bo tak się uczy w państwowej szkole ", "bo bez tego (tfu!) demokracja nie może istnieć ", "bo głupich jest więcej niż mądrych ", "bo chcą tworzyć raj na ziemi ", "bo chcą niszczyć cywilizację białego człowieka ", ],
        ["przez kolejne kadnecje.", "o czym się nie mówi.", "i własnie dlatego umiera Europa.", ", ale przyjdą muzłumanie i zrobią porządek.", " - tak samo zresztą jak za hitlera. ", " - proszę zobaczyć co się dzieje na Zachodzie, jeśli mi Państwo nie wierzą.", "co lat temu sto nie przyszło by nawet do głowy."]
    ]

    lottery = number => {
        let draw;
        draw = Math.random() * text[number].length;
        draw = Math.floor(draw);

        return text[number][draw];
    }

    crateText = () => {
        generate.textContent = null;
        for (let i = 0; i < text.length; i++) {
            generate.textContent += lottery(i);
        }
    }

    button.addEventListener("click", (e) => {
        crateText();
        butonImg.classList.add('rotate')
    }, false)

    button.addEventListener("touch", (e) => {
        crateText();
        butonImg.classList.add('rotate')
    }, false)

    butonImg.addEventListener("animationend", (e) => {
        butonImg.classList.remove('rotate')
    }, false)

    crateText();
})();