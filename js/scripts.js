const ourTeam = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    },
];

console.log('ourteam:', ourTeam, ourTeam.length, typeof ourTeam);

console.log(ourTeam[0].name, ourTeam[0].role, ourTeam[0].image);

console.log(ourTeam[1].name, ourTeam[1].role, ourTeam[1].image);

console.log(ourTeam[2].name, ourTeam[2].role, ourTeam[2].image);
    
console.log(ourTeam[3].name, ourTeam[3].role, ourTeam[3].image);

console.log(ourTeam[4].name, ourTeam[4].role, ourTeam[4].image);

console.log(ourTeam[5].name, ourTeam[5].role, ourTeam[5].image);

for (let key in ourTeam) {
    console.log(ourTeam[key]);

}

for (let i = 0; i < ourTeam.length; i++) {
    console.log(ourTeam[i].name, ourTeam[i].role, ourTeam[i].image);
}