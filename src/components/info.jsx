const info = [
    {
        id: 1,
        title: "CTA Driver Sued for Kneeling Bus to Boomer",
        date: "05/14/2022",
        path: "buffalo-supermarket-shooting-new-york",
        image: "https://images.unsplash.com/photo-1608694385623-0486e9308b80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        content: `A teenage gunman wearing military gear and livestreaming with a helmet camera opened fire with a rifle at a Buffalo, New York, 
        supermarket in what authorities described as “racially motived violent extremism,” killing 10 people and wounding three others Saturday before he 
        surrendered, authorities said.
        
        Police officials said the 18-year-old gunman, who is white, was wearing body armor and military-style clothing when he pulled up and opened 
        fire at people at a Tops Friendly Market, the shooting streamed via a camera affixed to the man's helmet.

        "He exited his vehicle. He was very heavily armed. He had tactical gear. He had a tactical helmet on. He had a camera that he was livestreaming 
        what he was doing,” city Police Commissioner Joseph Gramaglia said at a news conference afterward.`,
        spotlight: false
    },
    {
        id: 2,
        title: "The REAL Reason Chicago Winters Suck? A Libertarian Expert Weighs In",
        date: "05/14/2022",
        path: "boy-wounded-in-millennium-park-shooting-near-the-bean-in-serious-condition-fire-official",
        image: "https://images.unsplash.com/photo-1523911355839-ae7508262a3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1479&q=80",
        content: `Two people have been taken into custody for questioning after a 16-year-old boy was fatally shot Saturday night at Millennium Park in the Loop.
        
        The teen was standing by 'The Bean' statue about 7:30 p.m. in the 200 block of East Randolph Street when he was shot in the chest, 
        Chicago police and fire officials said.
        
        Paramedics took him to Lurie Children's Hospital, where he was pronounced dead, police said.`,
        spotlight: false
    },
    {
        id: 3,
        title: "10 dead in mass shooting at supermarket, suspect arraigned",
        date: "05/14/2022",
        path: "buffalo-supermarket-shooting-new-york",
        image: "https://cst.brightspotcdn.com/dims4/default/1f96187/2147483647/strip/true/crop/6000x4000+0+0/resize/840x560!/format/webp/quality/90/?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FqqCn-u3T3PDfDDylpBJ_mC0L8rE%3D%2F0x0%3A6000x4000%2F6000x4000%2Ffilters%3Afocal%283000x2000%3A3001x2001%29%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F23467937%2FBuffalo_Supermarket_Shooting.jpg",
        content: `A teenage gunman wearing military gear and livestreaming with a helmet camera opened fire with a rifle at a Buffalo, New York, 
        supermarket in what authorities described as “racially motived violent extremism,” killing 10 people and wounding three others Saturday before he 
        surrendered, authorities said.
        
        Police officials said the 18-year-old gunman, who is white, was wearing body armor and military-style clothing when he pulled up and opened 
        fire at people at a Tops Friendly Market, the shooting streamed via a camera affixed to the man's helmet.

        "He exited his vehicle. He was very heavily armed. He had tactical gear. He had a tactical helmet on. He had a camera that he was livestreaming 
        what he was doing,” city Police Commissioner Joseph Gramaglia said at a news conference afterward.`,
        spotlight: false
    },
    {
        id: 4,
        title: "The REAL Reason Chicago Winters Suck? A Libertarian Expert Weighs In",
        date: "05/14/2022",
        path: "boy-wounded-in-millennium-park-shooting-near-the-bean-in-serious-condition-fire-official",
        image: "https://images.unsplash.com/photo-1523911355839-ae7508262a3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1479&q=80",
        content: `Two people have been taken into custody for questioning after a 16-year-old boy was fatally shot Saturday night at Millennium Park in the Loop.
        
        The teen was standing by 'The Bean' statue about 7:30 p.m. in the 200 block of East Randolph Street when he was shot in the chest, 
        Chicago police and fire officials said.
        
        Paramedics took him to Lurie Children's Hospital, where he was pronounced dead, police said.`,
        spotlight: false
    },
    {
        id: 5,
        title: "Lightfoot bans unaccompanied minors from Millennium Park on weekend evenings after fatal shooting near ‘The Bean’",
        date: "05/15/2022",
        path: "boy-wounded-in-millennium-park-shooting-near-the-bean-in-serious-condition-fire-official",
        image: "https://images.unsplash.com/photo-1523911355839-ae7508262a3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1479&q=80",
        content: `Two people have been taken into custody for questioning after a 16-year-old boy was fatally shot Saturday night at Millennium Park in the Loop.
        
        The teen was standing by 'The Bean' statue about 7:30 p.m. in the 200 block of East Randolph Street when he was shot in the chest, 
        Chicago police and fire officials said.
        
        Paramedics took him to Lurie Children's Hospital, where he was pronounced dead, police said.`,
        spotlight: false
    },
    {
        id: 6,
        title: "The REAL Reason Chicago Winters Suck? A Libertarian Expert Weighs In",
        date: "05/14/2022",
        path: "boy-wounded-in-millennium-park-shooting-near-the-bean-in-serious-condition-fire-official",
        image: "https://images.unsplash.com/photo-1523911355839-ae7508262a3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1479&q=80",
        content: `Two people have been taken into custody for questioning after a 16-year-old boy was fatally shot Saturday night at Millennium Park in the Loop.
        
        The teen was standing by 'The Bean' statue about 7:30 p.m. in the 200 block of East Randolph Street when he was shot in the chest, 
        Chicago police and fire officials said.
        
        Paramedics took him to Lurie Children's Hospital, where he was pronounced dead, police said.`,
        spotlight: false
    },
    {
        id: 7,
        title: "The REAL Reason Chicago Winters Suck? A Libertarian Expert Weighs In",
        date: "05/14/2022",
        path: "boy-wounded-in-millennium-park-shooting-near-the-bean-in-serious-condition-fire-official",
        image: "https://images.unsplash.com/photo-1523911355839-ae7508262a3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1479&q=80",
        content: `Two people have been taken into custody for questioning after a 16-year-old boy was fatally shot Saturday night at Millennium Park in the Loop.
        
        The teen was standing by 'The Bean' statue about 7:30 p.m. in the 200 block of East Randolph Street when he was shot in the chest, 
        Chicago police and fire officials said.
        
        Paramedics took him to Lurie Children's Hospital, where he was pronounced dead, police said.`,
        spotlight: false
    },
    {
        id: 8,
        title: "The REAL Reason Chicago Wifcwadnters Suck? A Libertarian Expert Weighs In",
        date: "05/14/2022",
        path: "boy-wounded-in-millennium-park-shooting-near-the-bean-in-serious-condition-fire-official",
        image: "https://images.unsplash.com/photo-1523911355839-ae7508262a3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1479&q=80",
        content: `Two people have been taken into custody for questioning after a 16-year-old boy was fatally shot Saturday night at Millennium Park in the Loop.
        
        The teen was standing by 'The Bean' statue about 7:30 p.m. in the 200 block of East Randolph Street when he was shot in the chest, 
        Chicago police and fire officials said.
        
        Paramedics took him to Lurie Children's Hospital, where he was pronounced dead, police said.`,
        spotlight: true
    },
    {
        id: 9,
        title: "The REAL Reason Chicago Winters Suck? A Libertarian Expert Weighs In",
        date: "05/14/2022",
        path: "boy-wounded-in-millennium-park-shooting-near-the-bean-in-serious-condition-fire-official",
        image: "https://images.unsplash.com/photo-1523911355839-ae7508262a3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1479&q=80",
        content: `Two people have been taken into custody for questioning after a 16-year-old boy was fatally shot Saturday night at Millennium Park in the Loop.
        
        The teen was standing by 'The Bean' statue about 7:30 p.m. in the 200 block of East Randolph Street when he was shot in the chest, 
        Chicago police and fire officials said.
        
        Paramedics took him to Lurie Children's Hospital, where he was pronounced dead, police said.`,
        spotlight: false
    },
]

export default info;