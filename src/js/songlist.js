const songList = [
  {
    artist: "A Perfect Circle",
    title: "Judith",
    link: "https://www.youtube.com/watch?v=xTgKRCXybSM&ab_channel=APerfectCircleVEVO"
  },
  {
    artist: "Alanis Morissette",
    title: "You Oughta Know",
    link: "https://www.youtube.com/watch?v=NPcyTyilmYY&ab_channel=AlanisMorissette"
  },
  {
    artist: "Amy Winehouse",
    title: "Rehab",
    link: "https://www.youtube.com/watch?v=KUmZp8pR1uc&ab_channel=AmyWinehouseVEVO"
  },
  {
    artist: "Aretha Franklin",
    title: "Respect",
    link: "https://www.youtube.com/watch?v=6FOUqQt3Kg0&ab_channel=TatanBrown"
  },
  {
    artist: "Audioslave",
    title: "Like a Stone",
    link: "https://www.youtube.com/watch?v=7QU1nvuxaMA&ab_channel=AudioslaveVEVO"
  },
  {
    artist: "The Smashing Pumpkins",
    title: "1979",
    link: "https://www.youtube.com/watch?v=4aeETEoNfOg"
  }, 
  {
    artist: "Tool",
    title: "Forty Six & 2",
    link: "https://www.youtube.com/watch?v=GIuZUCpm9hc"
  },
  {
    artist: "Tool",
    title: "Sober",
    link: "youtube.com/watch?v=nspxAG12Cpc&ab_channel=TOOLVEVO"
  },
  {
    artist: "Aladdin",
    title: "A Whole New World",
    link: "https://www.youtube.com/watch?v=MJLOCAWkRoc&ab_channel=DisneyLyrics18"
  },
  {
    artist: "Motorhead",
    title: "Ace of Spades",
    link: "https://www.youtube.com/watch?v=3mbvWn1EY6g&ab_channel=Mot%C3%B6rheadOfficial"
  },
  {
    artist: "Toto",
    title: "Africa",
    link: "https://www.youtube.com/watch?v=FTQbiNvZqaY&ab_channel=TotoVEVO"
  },
  {
    artist: "Green Day",
    title: "American Idiot",
    link: "https://www.youtube.com/watch?v=Ee_uujKuJMI&ab_channel=GreenDay"
  },
  {
    artist: "American Pie",
    title: "Don Mclean",
    link: "https://www.youtube.com/watch?v=iX_TFkut1PM&ab_channel=DonMcLean-Topic"
  },
  {
    artist: "Amish Paradise",
    title: "Weird Al Yankovic",
    link: "https://www.youtube.com/watch?v=lOfZLb33uCg"
  },
  {
    artist: "Jet",
    title: "Are You Gonna Be My Girl",
    link: "Jet - Are You Gonna Be My Girl"
  },
  {
    artist: "Sir Mix-A-Lot",
    title: "Baby Got Back",
    link: "https://www.youtube.com/watch?v=X53ZSxkQ3Ho"
  },
  {
    artist: "Dean Martin",
    title: "Baby, It's Cold Outside",
    link: "https://www.youtube.com/watch?v=crFQpOCDfEc&ab_channel=Oda"
  },
  {
    artist: "Britney Spears",
    title: "...Baby One More Time",
    link: "https://www.youtube.com/watch?v=C-u5WLJ9Yk4"
  },
  {
    artist: "Bloodhound Gang",
    title: "The Bad Touch",
    link: "https://www.youtube.com/watch?v=xat1GVnl8-k"
  },
  {
    artist: "Sweet",
    title: "Ballroom Blitz",
    link: "https://www.youtube.com/watch?v=z_jdiU47bFA"
  },  
  {
    artist: "Green Day",
    title: "Basket Case",
    link: "https://www.youtube.com/watch?v=mDbSFyReulk&ab_channel=GreenDay"
  },  
  {
    artist: "Deftones",
    title: "Be Quiet And Drive",
    link: "https://www.youtube.com/watch?v=KvknOXGPzCQ"
  },  
  {
    artist: "Afroman",
    title: "Because I Got High",
    link: "https://www.youtube.com/watch?v=WeYsTmIzjkw"
  },  
  {
    artist: "Reel Big Fish",
    title: "Beer",
    link: "https://www.youtube.com/watch?v=gql9220Qon8&ab_channel=ReelBigFishTv"
  }, 
  {
    artist: "Carrie Underwood",
    title: "Before He Cheats",
    link: "https://www.youtube.com/watch?v=WaSy8yy-mr8"
  }, 
  {
    artist: "Elton John",
    title: "Benny And The Jets",
    link: "https://www.youtube.com/watch?v=p5rQHoaQpTw&ab_channel=RewindMusicGroup"
  }, 
  {
    artist: "KT Tunstall",
    title: "Big Black Horse and the Cherry Tree",
    link: "https://www.youtube.com/watch?v=PQmDUEv939A"
  }, 
  {
    artist: "Billy Joel",
    title: "Big Shot",
    link: "https://www.youtube.com/watch?v=bEea624OBzM"
  },
  {
    artist: "Michael Jackson",
    title: "Billie Jean",
    link: "https://www.youtube.com/watch?v=Zi_XLOBDo_Y"
  },
  {
    artist: "Ram Jam",
    title: "Black Betty",
    link: "https://www.youtube.com/watch?v=I_2D8Eo15wE"
  },
  {
    artist: "Soundgarden",
    title: "Black Hole Sun",
    link: "https://www.youtube.com/watch?v=3mbBbFH9fAg"
  },
  {
    artist: "Alannah Myles",
    title: "Black Velvet",
    link: "https://www.youtube.com/watch?v=tT4d1LQy4es"
  }, 
  {
    artist: "Violent Femmes",
    title: "Blister in the Sun",
    link: "https://www.youtube.com/watch?v=hYZkoI1ggEw&ab_channel=armytype77"
  }, 
  {
    artist: "The Ramones",
    title: "Blitzkrieg Bop",
    link: "https://www.youtube.com/watch?v=268C3N2dDYk"
  }, 
  {
    artist: "Queen",
    title: "Bohemian Rhapsody",
    link: "https://www.youtube.com/watch?v=fJ9rUzIMcZQ"
  },
  {
    artist: "Bruce Springsteen",
    title: "Born To Run",
    link: "https://www.youtube.com/watch?v=IxuThNgl3YA"
  },
  {
    artist: "Melanie",
    title: "Brand New Key",
    link: "https://www.youtube.com/watch?v=lKcpodt0YCU"
  },
  {
    artist: "Evanescence",
    title: "Bring Me To Life",
    link: "https://www.youtube.com/watch?v=3YxaaGgTQYM"
  },
  {
    artist: "Van Morrison",
    title: "Brown Eyed Girl",
    link: "https://www.youtube.com/watch?v=UfmkgQRmmeE"
  },
  {
    artist: "Weezer",
    title: "Buddy Holly",
    link: "https://www.youtube.com/watch?v=kemivUKb4f4"
  },
  {
    artist: "The Foundations",
    title: "Build Me Up Buttercup",
    link: "https://www.youtube.com/watch?v=FvluBVhfGcw&ab_channel=TheFoundations-Topic"
  },
  {
    artist: "Smashing Pumpkins",
    title: "Bullet With Butterfly Wings",
    link: "https://www.youtube.com/watch?v=8-r-V0uK4u0"
  },
  {
    artist: "Rage Against The Machine",
    title: "Bulls On Parade",
    link: "https://www.youtube.com/watch?v=3L4YrGaR8E4&ab_channel=RATMVEVO"
  },
  {
    artist: "Elvis Presley",
    title: "Can't Help Falling In Love",
    link: "https://www.youtube.com/watch?v=vGJTaP6anOU"
  },
  {
    artist: "System Of A Down",
    title: "Chop Suey!",
    link: "https://www.youtube.com/watch?v=MlcJQYON2Go"
  },
  {
    artist: "Nine Inch Nails",
    title: "Closer",
    link: "https://vimeo.com/3554226"
  },
  {
    artist: "Styx",
    title: "Come Sail Away",
    link: "https://www.youtube.com/watch?v=e5MAg_yWsq8"
  },
  {
    artist: "The Beatles",
    title: "Come Together",
    link: "https://www.youtube.com/watch?v=l3SBBWIxGZA"
  },
  {
    artist: "Barry Manilow",
    title: "Copacabana",
    link: "https://www.youtube.com/watch?v=7cB5VQAAOYk"
  },
  {
    artist: "Patsy Cline",
    title: "Crazy",
    link: "https://www.youtube.com/watch?v=pMLBWIcrm8Y&ab_channel=33Evenstar"
  },
  {
    artist: "Buckcherry",
    title: "Crazy Bitch",
    link: "https://www.youtube.com/watch?v=UJ6pLKlU-8Q&list=PLnQ9BkYhVXMAjK6iy7Mqvkzzx7FufHU39&ab_channel=RHINO"
  },
  {
    artist: "Heart",
    title: "Crazy On You",
    link: "https://www.youtube.com/watch?v=OZuW6BH_Vak"
  },
  {
    artist: "Radiohead",
    title: "Creep",
    link: "https://www.youtube.com/watch?v=XFkzRNyygfk"
  },
  {
    artist: "Stone Temple Pilots",
    title: "Creep",
    link: "https://www.youtube.com/watch?v=sT1DdO3SISg&list=RDhVnyScPCoqM&index=3&ab_channel=StoneTemplePilots"
  },
  {
    artist: "Fionna Apple",
    title: "Criminal",
    link: "https://www.youtube.com/watch?v=FFOzayDpWoI"
  },
  {
    artist: "The Monkees",
    title: "Daydream Believer",
    link: "https://www.youtube.com/watch?v=xvqeSJlgaNk"
  },
  {
    artist: "Blue Oyster Cult",
    title: "(Don't Fear) The Reaper",
    link: "https://www.youtube.com/watch?v=PtoK2CSTehQ"
  },
  {
    artist: "Norah Jones",
    title: "Don't Know Why",
    link: "https://www.youtube.com/watch?v=tO4dxvguQDk"
  },
  {
    artist: "No Doubt",
    title: "Don't Speak",
    link: "https://www.youtube.com/watch?v=TR3Vdo5etCQ"
  },
  {
    artist: "Journey",
    title: "Don't Stop Believin'",
    link: "https://www.youtube.com/watch?v=1k8craCGpgs"
  },
  {
    artist: "Queen",
    title: "Don't Stop Me Now",
    link: "https://www.youtube.com/watch?v=HgzGwKwLmgM"
  },
  {
    artist: "Simple Minds",
    title: "Don't You (Forget About ME)",
    link: "https://www.youtube.com/watch?v=CdqoNKCCt7A&ab_channel=SimpleMindsVEVO"
  },
  {
    artist: "Fleetwood Mac",
    title: "Dreams",
    link: "https://www.youtube.com/watch?v=Y3ywicffOj4"
  },
  {
    artist: "Dobie Gray",
    title: "Drift Away",
    link: "https://www.youtube.com/watch?v=NIuyDWzctgY"
  },
  {
    artist: "Incubus",
    title: "Drive",
    link: "https://m.youtube.com/watch?v=fgT9zGkiLig&index=4&list=PLV4tuyN9KZxN9EjHNmtSuT4Nf_hsGwPvp"
  },
  {
    artist: "Train",
    title: "Drops Of Jupiter",
    link: "https://www.youtube.com/watch?v=2KMi3dSEiFY"
  },
  {
    artist: "MGMT",
    title: "Electric Feel",
    link: "https://www.youtube.com/watch?v=MmZexg8sxyk&list=PLU2y_MST_LkIwrn7E60iS0hmEXYW9Swz_&index=33&t=0s"
  },
  {
    artist: "Metallica",
    title: "Enter Sandman",
    link: "https://www.youtube.com/watch?v=CD-E-LDc384"
  },
  {
    artist: "Faith No More",
    title: "Epic",
    link: "https://www.youtube.com/watch?v=ZG_k5CSYKhg"
  },
  {
    artist: "Foo Fighters",
    title: "Everlong",
    link: "https://www.youtube.com/watch?v=eBG7P-K-r1Y&list=RDCxKWTzr-k6s&index=8"
  },
  {
    artist: "George Michael",
    title: "Faith",
    link: "https://www.youtube.com/watch?v=6Cs3Pvmmv0E"
  },
  {
    artist: "Journey",
    title: "Faithfully",
    link: "https://www.youtube.com/watch?v=OMD8hBsA-RI"
  },
  {
    artist: "Hank Williams Jr.",
    title: "Family Tradition",
    link: "https://www.youtube.com/watch?v=xd0TGfZSACI&t=17s&ab_channel=HankWilliams"
  },
  {
    artist: "Candlebox",
    title: "Far Behind",
    link: "https://www.youtube.com/watch?v=eu3EuWg2qNI&list=PLmS0o7SrXZ5vO09bQE5MOQlUBnuuWjeJC&index=3&t=0s"
  },
  {
    artist: "Queen",
    title: "Fat Bottomed Girls",
    link: "https://www.youtube.com/watch?v=VMnjF1O4eH0"
  },
  {
    artist: "Beastie Boys",
    title: "Fight For Your Right",
    link: "https://www.youtube.com/watch?v=eBShN8qT4lk&list=PL631pvvAyiGNtnEMK0ZJAPSS8Nb4219RN&index=10&t=0s"
  },
  {
    artist: "Harvey Danger",
    title: "Flagpole Sitta",
    link: "https://www.youtube.com/watch?v=wYsMjEeEg4g&list=PLOg_WhbsiNX4CIB0Wwxp_n5XSPi3CbrEv"
  },
  {
    artist: "Weird Al Yankovic",
    title: "Foil",
    link: "https://www.youtube.com/watch?v=urglg3WimHA"
  },
  {
    artist: "Johnny Cash",
    title: "Folsom Prison Blues",
    link: "https://www.youtube.com/watch?v=kMyzoHBtaME&ab_channel=JohnnyCash1Fan1"
  },
  {
    artist: "Dr. Dre & Eminem",
    title: "Forgot About Dre",
    link: "https://www.youtube.com/watch?v=QFcv5Ma8u8k"
  },
  {
    artist: "Tom Petty",
    title: "Free Fallin'",
    link: "https://www.youtube.com/watch?v=1lWJXDG2i0A"
  },
  {
    artist: "Garth Brooks",
    title: "Friends In Low Places",
    link: "https://www.youtube.com/watch?v=0e_HtjZS8SQ&ab_channel=KingwishzVidz"
  },
  {
    artist: "Tenacious D",
    title: "Fuck Her Gently",
    link: "https://www.youtube.com/watch?v=zliY-MrI0mY&ab_channel=TenaciousD-Topic"
  },
  {
    artist: "Coolio",
    title: "Gangsta's Paradise",
    link: "https://www.youtube.com/watch?v=fPO76Jlnz6c"
  },
  {
    artist: "Snoop Dogg",
    title: "Gin And Juice",
    link: "https://www.youtube.com/watch?v=fWCZse1iwE0"
  },
  {
    artist: "Tracy Chapman",
    title: "Give Me One Reason",
    link: "https://www.youtube.com/watch?v=V6hQ9HSKlIE"
  },
  {
    artist: "Lee Greenwood",
    title: "God Bless The U.S.A",
    link: "https://www.youtube.com/watch?v=Q65KZIqay4E"
  },
  {
    artist: "Dixie Chicks",
    title: "Goodbye Earl",
    link: "https://www.youtube.com/watch?v=Gw7gNf_9njs"
  },
  {
    artist: "Pharrell Williams",
    title: "Happy",
    link: "https://www.youtube.com/watch?v=ZbZSe6N_BXs"
  },
  {
    artist: "Nirvana",
    title: "Heart-Shaped Box",
    link: "https://www.youtube.com/watch?v=n6P0SitRwy8"
  },
  {
    artist: "Pat Benatar",
    title: "Heartbreaker",
    link: "https://www.youtube.com/watch?v=mIosHNpGjTE&ab_channel=JuanClassic"
  },
  {
    artist: "Lionel Ritchie",
    title: "Hello",
    link: "https://www.youtube.com/watch?v=RZ1pQZXK3dM"
  },
  {
    artist: "Gin Blossoms",
    title: "Hey Jealousy",
    link: "https://www.youtube.com/watch?v=ah5gAkna3jI"
  },
  {
    artist: "The Beatles",
    title: "Hey Jude",
    link: "https://www.youtube.com/watch?v=A_MjCqQoLLA"
  },
  {
    artist: "OutKast",
    title: "Hey Ya!",
    link: "https://www.youtube.com/watch?v=PWgvGjAhvIw"
  },
  {
    artist: "Pat Benatar",
    title: "Hit Me With Your Best Shot",
    link: "https://www.youtube.com/watch?v=VopgyAc-F9U&ab_channel=ClassicVideos80s"
  },
  {
    artist: "The Lumineers",
    title: "Ho Hey",
    link: "https://www.youtube.com/watch?v=zvCBSSwgtg4"
  },
  {
    artist: "Dio",
    title: "Holy Diver",
    link: "https://www.youtube.com/watch?v=2lvs2FzF64o"
  },
  {
    artist: "The Eagles",
    title: "Hotel California",
    link: "https://www.youtube.com/watch?v=EiXWJMaiEZA"
  },
  {
    artist: "Duran Duran",
    title: "Hungry Like The Wolf",
    link: "https://www.youtube.com/watch?v=oJL-lCzEXgI"
  },
  {
    artist: "Johnny Cash",
    title: "Hurt",
    link: "https://www.youtube.com/watch?v=8AHCfZTRGiI"
  },
  {
    artist: "John Mellencamp",
    title: "Hurts So Good",
    link: "https://www.youtube.com/watch?v=4dOsbsuhYGQ"
  },
  {
    artist: "I Believe In A Thing Called Love",
    title: "The Darkness",
    link: "https://www.youtube.com/watch?v=tKjZuykKY1I"
  },
  {
    artist: "The Rolling Stones",
    title: "I Can't Get No Satisfaction",
    link: "https://www.youtube.com/watch?v=nrIPxlFzDi0"
  },
  {
    artist: "Hall & Oates",
    title: "I Can't Go For That (No Can Do)",
    link: "https://www.youtube.com/watch?v=ccenFp_3kq8"
  },
  {
    artist: "Aerosmith",
    title: "I Don't Want To Miss A Thing",
    link: "https://www.youtube.com/watch?v=JkK8g6FMEXE"
  },
  {
    artist: "Joan Jett & The Blackhearts",
    title: "I Love Rock 'N Roll",
    link: "https://www.youtube.com/watch?v=t1D-e29Hbhc&ab_channel=TV80s"
  },
  {
    artist: "Toby Keith",
    title: "I Love This Bar",
    link: "https://www.youtube.com/watch?v=-Fulz4ytZ54"
  },
  {
    artist: "Whitney Houston",
    title: "I Wanna Dance With Somebody",
    link: "https://www.youtube.com/watch?v=eH3giaIzONA"
  },
  {
    artist: "Backstreet Boys",
    title: "I Want It That Way",
    link: "https://www.youtube.com/watch?v=4fndeDfaWCg"
  },
  {
    artist: "Whitney Houston",
    title: "I Will Always Love You",
    link: "https://www.youtube.com/watch?v=3JWTaaS7LdU"
  },
  {
    artist: "Gloria Gaynor",
    title: "I Will Survive",
    link: "https://www.youtube.com/watch?v=ARt9HV9T0w8"
  },
  {
    artist: "Cake",
    title: "I Will Survive",
    link: "https://www.youtube.com/watch?v=f9rCUQjmkxU"
  },
  {
    artist: "Vanilla Ice",
    title: "Ice Ice Baby",
    link: "https://www.youtube.com/watch?v=rog8ou-ZepE"
  },
  {
    artist: "Tonic",
    title: "If You Could Only See",
    link: "https://www.youtube.com/watch?v=Sfg6-4mBs6Y"
  },
  {
    artist: "R. Kelly",
    title: "Ignition (Remix)",
    link: "https://www.youtube.com/watch?v=y6y_4_b6RS8"
  },
  {
    artist: "Melissa Etheridge",
    title: "I'm The Only One",
    link: "https://www.youtube.com/watch?v=oCphbDRkZSo"
  },
  {
    artist: "John Lennon",
    title: "Imagine",
    link: "https://www.youtube.com/watch?v=YkgkThdzX-8&ab_channel=johnlennon"
  },
  {
    artist: "Led Zeppelin",
    title: "Immigrant Song",
    link: "https://www.youtube.com/watch?v=RlNhD0oS5pk"
  },
  {
    artist: "Cage The Elephant",
    title: "In One Ear",
    link: "https://www.youtube.com/watch?v=DPgWNuUkuA8"
  },
  {
    artist: "Phil Collins",
    title: "In The Air Tonight",
    link: "https://www.youtube.com/watch?v=YkADj0TPrJA"
  },
  {
    artist: "Eve 6",
    title: "Inside Out",
    link: "https://www.youtube.com/watch?v=T8Xb_7YDroQ"
  },
  {
    artist: "Alanis Morissette",
    title: "Ironic",
    link: "https://www.youtube.com/watch?v=Jne9t8sHpUc"
  },
  {
    artist: "John Mellencamp",
    title: "Jack And Diane",
    link: "https://www.youtube.com/watch?v=h04CH9YZcpI&ab_channel=JohnMellencampVEVO"
  },
  {
    artist: "Johnny And June Carter Cash",
    title: "Jackson",
    link: "https://www.youtube.com/watch?v=U3NJC18Oi04"
  },
  {
    artist: "Pearl Jam",
    title: "Jeremy",
    link: "https://www.youtube.com/watch?v=MS91knuzoOA"
  },
  {
    artist: "Rick Springfield",
    title: "Jessie's Girl",
    link: "https://www.youtube.com/watch?v=qYkbTyHXwbs"
  },
  {
    artist: "Chuck Berry",
    title: "Johnny B. Goode",
    link: "https://www.youtube.com/watch?v=3z4u7h4PtdI&ab_channel=LoretoGabon"
  },
  {
    artist: "Steve Miller Band",
    title: "The Joker",
    link: "https://www.youtube.com/watch?v=dV3AziKTBUo"
  },
  {
    artist: "House Of Pain",
    title: "Jump Around",
    link: "https://www.youtube.com/watch?v=XhzpxjuwZy0"
  },
  {
    artist: "No Doubt",
    title: "Just A Girl",
    link: "https://www.youtube.com/watch?v=PHzOOQfhPFg"
  },
  {
    artist: "The Cars",
    title: "Just What I Needed",
    link: "https://www.youtube.com/watch?v=gvy2yqUHLLg"
  },
  {
    artist: "Radiohead",
    title: "Karma Police",
    link: "https://www.youtube.com/watch?v=1uYWYWPc9HU"
  },
  {
    artist: "Georgia Satellites",
    title: "Keep Your Hands To Yourself",
    link: "https://www.youtube.com/watch?v=PdpAop7gp0w"
  },
  {
    artist: "Motley Crue",
    title: "Kickstart My Heart",
    link: "https://www.youtube.com/watch?v=CmXWkMlKFkI"
  },
  {
    artist: "Rage Against The Machine",
    title: "Killing In The Name",
    link: "https://www.youtube.com/watch?v=bWXazVhlyxQ"
  },
  {
    artist: "The Fugees",
    title: "Killing Me Softly",
    link: "https://www.youtube.com/watch?v=dJvLE3jJq20&ab_channel=swaysara"
  },
  {
    artist: "Seal",
    title: "Kiss From A Rose",
    link: "https://www.youtube.com/watch?v=AMD2TwRvuoU"
  },
  {
    artist: "Ritchie Valens",
    title: "La Bamba",
    link: "https://www.youtube.com/watch?v=jSKJQ18ZoIA&ab_channel=JustinBieber"
  },
  {
    artist: "The Misfits",
    title: "Last Caress",
    link: "https://www.youtube.com/watch?v=YrUhcdu-vgc"
  },
  {
    artist: "Wham!",
    title: "Last Christmas",
    link: "https://www.youtube.com/watch?v=E8gmARGvPlI"
  },
  {
    artist: "The Strokes",
    title: "Last Nite",
    link: "https://www.youtube.com/watch?v=TOypSnKFHrE"
  },
  {
    artist: "Bill Withers",
    title: "Lean On Me",
    link: "https://www.youtube.com/watch?v=fOZ-MySzAac"
  },
  {
    artist: "Frozen",
    title: "Let It Go",
    link: "https://www.youtube.com/watch?v=YVVTZgwYwVo"
  },
  {
    artist: "Marvin Gaye",
    title: "Let's Get It On",
    link: "https://www.youtube.com/watch?v=54LgyqSPfsQ"
  },
  {
    artist: "Madonna",
    title: "Like A Prayer",
    link: "https://www.youtube.com/watch?v=79fzeNUqQbQ"
  },
  {
    artist: "Audioslave",
    title: "Like A Stone",
    link: "https://www.youtube.com/watch?v=7QU1nvuxaMA"
  },
  {
    artist: "Bon Jovi",
    title: "Livin' On A Prayer",
    link: "https://www.youtube.com/watch?v=lDK9QqIzhwk"
  },
  {
    artist: "Bruno Mars",
    title: "Locked Out Of Heaven",
    link: "https://www.youtube.com/watch?v=e-fA-gBCkj0"
  },
  {
    artist: "Eminem",
    title: "Lose Yourself",
    link: "https://www.youtube.com/watch?v=7YuAzR2XVAM"
  },
  {
    artist: "The B-52s",
    title: "Love Shack",
    link: "https://www.youtube.com/watch?v=9SOryJvTAGs"
  },
  {
    artist: "Justin Bieber",
    title: "Love Yourself",
    link: "https://www.youtube.com/watch?v=oyEuk8j8imI"
  },
  {
    artist: "Journey",
    title: "Lovin', Touchin', Squeezin'",
    link: "https://www.youtube.com/watch?v=fTkHFQC3wow"
  },
  {
    artist: "Shania Twain",
    title: "Man! I Feel Like A Woman",
    link: "https://www.youtube.com/watch?v=ZJL4UGSbeFg"
  },
  {
    artist: "Jimmy Buffett",
    title: "Margaritaville",
    link: "https://www.youtube.com/watch?v=ohDqjRGqpIU&ab_channel=JimmyBuffett-Topic"
  },
  {
    artist: "Tom Petty",
    title: "Mary Jane's Last Dance",
    link: "https://www.youtube.com/watch?v=aowSGxim_O8"
  },
  {
    artist: "Metallica",
    title: "Master Of Puppets",
    link: "https://www.youtube.com/watch?v=0obBdrfUMzU"
  },
  {
    artist: "Janis Joplin",
    title: "Me And Bobby McGee",
    link: "https://www.youtube.com/watch?v=WXV_QjenbDw"
  },
  {
    artist: "Jimmy Eat World",
    title: "The Middle",
    link: ""
  },
  {
    artist: "Bobby 'Boris' Pickett",
    title: "Monster Mash",
    link: ""
  },
  {
    artist: "Danzig",
    title: "Mother",
    link: ""
  },
  {
    artist: "Billy Joel",
    title: "Movin' Out (Anthony's Song)",
    link: ""
  },
  {
    artist: "The Killers",
    title: "Mr. Brightside",
    link: ""
  },
  {
    artist: "Red Hot Chili Peppers",
    title: "My Friends",
    link: ""
  },
  {
    artist: "The Temptations",
    title: "My Girl",
    link: ""
  },
  {
    artist: "Celine Dion",
    title: "My Heart Will Go On",
    link: ""
  },
  {
    artist: "Billy Joel",
    title: "My Life",
    link: ""
  },
  {
    artist: "Lit",
    title: "My Own Worst Enemy",
    link: ""
  },
  {
    artist: "Frank Sinatra",
    title: "New York, New York",
    link: ""
  },
  {
    artist: "Queens Of The Stone Age",
    title: "No One Knows",
    link: ""
  },
  {
    artist: "Blind Melon",
    title: "No Rain",
    link: ""
  },
  {
    artist: "TLC",
    title: "No Scrubs",
    link: ""
  },
  {
    artist: "Weird Al Yankovic",
    title: "Ode To A Superhero",
    link: ""
  },
  {
    artist: "Billy Joel",
    title: "Only The Good Die Young",
    link: ""
  },
  {
    artist: "The Rolling Stones",
    title: "Paint It Black",
    link: ""
  },
  {
    artist: "Van Halen",
    title: "Panama",
    link: ""
  },
  {
    artist: "The Presidents Of The United States Of America",
    title: "Peaches",
    link: ""
  },
  {
    artist: "People Are Strange",
    title: "The Doors",
    link: ""
  },
  {
    artist: "Billy Joel",
    title: "Piano Man",
    link: ""
  },
  {
    artist: "Kid Rock & Sheryl Crow",
    title: "Picture",
    link: ""
  },
  {
    artist: "Janis Joplin",
    title: "Piece Of My Heart",
    link: ""
  },
  {
    artist: "Stone Temple Pilots",
    title: "Plush",
    link: ""
  },
  {
    artist: "Bell Biv Devoe",
    title: "Poison",
    link: ""
  },
  {
    artist: "Lady Gaga",
    title: "Poker Face",
    link: ""
  },
  {
    artist: "The Toadies",
    title: "Possum Kingdom",
    link: ""
  },
  {
    artist: "Def Leppard",
    title: "Pour Some Sugar On Me",
    link: ""
  },
  {
    artist: "Creedence Clearwater Revival",
    title: "Proud Mary",
    link: ""
  },
  {
    artist: "Tina Turner",
    title: "Proud Mary",
    link: ""
  },
  {
    artist: "Prince",
    title: "Purple Rain",
    link: ""
  },
  {
    artist: "Billy Idol",
    title: "Rebel Yell",
    link: ""
  },
  {
    artist: "Warren G And Nate Dogg",
    title: "Regulate",
    link: ""
  },
  {
    artist: "Johnny Cash",
    title: "Ring Of Fire",
    link: ""
  },
  {
    artist: "Elton John",
    title: "Rocketman",
    link: ""
  },
  {
    artist: "Adele",
    title: "Rolling In The Deep",
    link: ""
  },
  {
    artist: "Alice In Chains",
    title: "Rooster",
    link: ""
  },
  {
    artist: "The Police",
    title: "Roxanne",
    link: ""
  },
  {
    artist: "Lorde",
    title: "Royals",
    link: ""
  },
  {
    artist: "Rancid",
    title: "Ruby Soho",
    link: ""
  },
  {
    artist: "Iron Maiden",
    title: "Run To The Hills",
    link: ""
  },
  {
    artist: "Beastie Boys",
    title: "Sabotage",
    link: ""
  },
  {
    artist: "Weird Al Yankovic",
    title: "The Saga Begins",
    link: ""
  },
  {
    artist: "Sublime",
    title: "Santeria",
    link: ""
  },
  {
    artist: "Elton John",
    title: "Saturday Night's Alright For Fighting",
    link: ""
  },
  {
    artist: "Weezer",
    title: "Say It Ain't So",
    link: ""
  },
  {
    artist: "Earth, Wind & Fire",
    title: "September",
    link: ""
  },
  {
    artist: "The White Stripes",
    title: "Seven Nation Army",
    link: ""
  },
  {
    artist: "Marcy Playground",
    title: "Sex And Candy",
    link: ""
  },
  {
    artist: "Collective Soul",
    title: "Shine",
    link: ""
  },
  {
    artist: "Salt-N-Pepa",
    title: "Shoop",
    link: ""
  },
  {
    artist: "Lynyrd Skynyrd",
    title: "Simple Man",
    link: ""
  },
  {
    artist: "Night Ranger",
    title: "Sister Christian",
    link: ""
  },
  {
    artist: "Otis Redding",
    title: "Sittin' On The Dock Of The Bay",
    link: ""
  },
  {
    artist: "Weird Al Yankovic",
    title: "Smells Like Nirvana",
    link: ""
  },
  {
    artist: "Tool",
    title: "Sober",
    link: ""
  },
  {
    artist: "John Michael Montgomery",
    title: "Sold (The Grundy County Auction)",
    link: ""
  },
  {
    artist: "David Bowie",
    title: "Space Oddity",
    link: ""
  },
  {
    artist: "Richard Cheese",
    title: "Star Wars Cantina",
    link: ""
  },
  {
    artist: "Stray Cats",
    title: "Stray Cat Strut",
    link: ""
  },
  {
    artist: "Fall Out Boy",
    title: "Sugar, We're Goin Down",
    link: "https://www.youtube.com/watch?v=uhG-vLZrb-g"
  },
  {
    artist: "Grease",
    title: "Summer Nights",
    link: ""
  },
  {
    artist: "Bryan Adams",
    title: "Summer Of '69",
    link: ""
  },
  {
    artist: "Stevie Wonder",
    title: "Superstition",
    link: ""
  },
  {
    artist: "Elvis Presley",
    title: "Suspicious Minds",
    link: ""
  },
  {
    artist: "Megadeth",
    title: "Sweating Bullets",
    link: ""
  },
  {
    artist: "Neil Diamond",
    title: "Sweet Caroline",
    link: ""
  },
  {
    artist: "Guns N' Roses",
    title: "Sweet Child O' Mine",
    link: ""
  },
  {
    artist: "Lynyrd Skynyrd",
    title: "Sweet Home Alabama",
    link: ""
  },
  {
    artist: "Weird Al Yankovic",
    title: "Tacky",
    link: ""
  },
  {
    artist: "Franz Ferdinand",
    title: "Take Me Out",
    link: ""
  },
  {
    artist: "John Denver",
    title: "Take Me Home, Country Roads",
    link: ""
  },
  {
    artist: "Poison",
    title: "Talk Dirty To Me",
    link: ""
  },
  {
    artist: "My Chemical Romance",
    title: "Teenagers",
    link: ""
  },
  {
    artist: "Chris Stapleton",
    title: "Tennesse Whiskey",
    link: ""
  },
  {
    artist: "Nancy Sinatra",
    title: "These Boots Are Made For Walkin'",
    link: ""
  },
  {
    artist: "AC/DC",
    title: "Thunderstruck",
    link: ""
  },
  {
    artist: "Elton John",
    title: "Tiny Dancer",
    link: ""
  },
  {
    artist: "Rush",
    title: "Tom Sawyer",
    link: ""
  },
  {
    artist: "Bonnie Tyler",
    title: "Total Eclipse Of The Heart",
    link: ""
  },
  {
    artist: "The Rocky Horror Picture Show",
    title: "Touch-A, Touch-A, Touch Me",
    link: ""
  },
  {
    artist: "Tenacious D",
    title: "Tribute",
    link: ""
  },
  {
    artist: "Bob Seger",
    title: "Turn The Page",
    link: ""
  }, 
  {
    artist: "The Beatles",
    title: "Twist And Shout",
    link: ""
  },
  {
    artist: "Red Hot Chili Peppers",
    title: "Under The Bridge",
    link: ""
  },
  {
    artist: "Weezer",
    title: "Undone - The Sweater Song",
    link: "https://www.youtube.com/watch?v=LHQqqM5sr7g&list=PLnQjsPdbMPWiaSc9JV5NkhEEV-AK3yfKS&index=1&t=0s"
  },
  {
    artist: "Muse",
    title: "Uprising",
    link: ""
  },
  {
    artist: "Amy Winehouse",
    title: "Valerie",
    link: ""
  },
  {
    artist: "Darius Rucker",
    title: "Wagon Wheel",
    link: ""
  },
  {
    artist: "Old Crow Medicine Show",
    title: "Wagon Wheel",
    link: ""
  },
  {
    artist: "Pantera",
    title: "Walk",
    link: ""
  },
  {
    artist: "Bon Jovi",
    title: "Wanted Dead Or Alive",
    link: ""
  },
  {
    artist: "Black Sabbath",
    title: "War Pigs",
    link: ""
  },
  {
    artist: "TLC",
    title: "Waterfalls",
    link: ""
  },
  {
    artist: "Louis Armstrong",
    title: "What A Wonderful World",
    link: ""
  },
  {
    artist: "Justin Timberlake",
    title: "What Goes Around...Comes Around",
    link: ""
  },
  {
    artist: "Sublime",
    title: "What I Got",
    link: ""
  },
  {
    artist: "Blink 182",
    title: "What's My Age Again",
    link: ""
  },
  {
    artist: "4 Non Blondes",
    title: "What's Up?",
    link: ""
  },
  {
    artist: "Pixies",
    title: "Where Is My Mind?",
    link: ""
  },
  {
    artist: "Beck",
    title: "Where It's At",
    link: ""
  },
  {
    artist: "Billy Idol",
    title: "White Wedding",
    link: ""
  },
  {
    artist: "Chris Isaak",
    title: "Wicked Game",
    link: ""
  },
  {
    artist: "U2",
    title: "With Or Without You",
    link: ""
  },
  {
    artist: "Tenacious D",
    title: "Wonderboy",
    link: ""
  },
  {
    artist: "Eric Clapton",
    title: "Wonderful Tonight",
    link: ""
  },
  {
    artist: "Oasis",
    title: "Wonderwall",
    link: ""
  },
  {
    artist: "Miley Cyrus",
    title: "Wrecking Ball",
    link: ""
  },
  {
    artist: "AC/DC",
    title: "You Shook Me All Night Long",
    link: ""
  },
  {
    artist: "The Righteos Brothers",
    title: "You've Lost That Lovin' Feelin'",
    link: ""
  },
  {
    artist: "The Outfield",
    title: "Your Love",
    link: ""
  },
  {
    artist: "The Cranberries",
    title: "Zombie",
    link: ""
  },
]

const search = document.querySelector(".songlist__form-input");
const randomSong = document.querySelector(".songlist__link-text");
const headRow = document.querySelector(".songlist__head-row");
const artistHeader = document.querySelector(".songlist__head-item--artist");
const songHeader = document.querySelector(".songlist__head-item--song");
const orderIcon = document.querySelectorAll(".songlist__head-icon");
const tableBody = document.querySelector(".songlist__table-body");
const tableRow = document.querySelector(".songlist__body-row");
const tableBottomText = document.querySelector(".songlist__table-bottom-text");
const noMatch = document.querySelector(".songlist__text-song-unavailable");
const currentListLength = document.querySelector(".songlist__text-current-list");
const totalListLength = document.querySelector(".songlist__text-total-list");
const numOfSongs = songList.length;
let currentListNum = 0;
const iconClasses = ["songlist__icon--unselected", "songlist__head-icon--sorted", "songlist__head-icon--reversed"];

const getRandomInt = (num) => {
  return Math.floor(Math.random() * (num));
}

const sortByArtist = (arr) => {
  arr.sort((a, b) => {
    if (a.artist > b.artist) {
      return 1;
    } else {
      return -1;
    }
  })
}

const reverseSortByArtist = (arr) => {
  arr.sort((a, b) => {
    if (a.artist < b.artist) {
      return 1;
    } else {
      return -1;
    }
  })
}

const sortBySong = (arr) => {
  arr.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    } else {
      return -1;
    }
  })
}

const reverseSortBySong = (arr) => {
  arr.sort((a, b) => {
    if (a.title < b.title) {
      return 1;
    } else {
      return -1;
    }
  })
}

const populateTable = (arr) => {
  for (let song of arr) {
    // Clone the first row variable (https://gomakethings.com/how-to-copy-or-clone-an-element-with-vanilla-js/).
    const rowClone = tableRow.cloneNode(true);
    rowClone.children[0].textContent = song.artist;
    rowClone.children[1].textContent = song.title;
    rowClone.children[2].setAttribute("href", song.link);
    tableBody.appendChild(rowClone);
    currentListNum += 1;
    currentListLength.textContent = currentListNum.toString();
  } 
  // if no songs found, set current songs displayed to 0, and display text via css class
  if (arr.length === 0) {
    currentListLength.textContent = 0;
    tableBottomText.classList.add("songlist__text-song-unavailable--shown");
  } else {
    tableBottomText.classList.remove("songlist__text-song-unavailable--shown");
  }
  // reset current list count
  currentListNum = 0;
}

const init = () => {
  currentListLength.textContent = numOfSongs;
  totalListLength.textContent = numOfSongs;
  sortByArtist(songList);
  tableBody.innerHTML = "";
  populateTable(songList);
}

search.addEventListener("input", function(e){
  const userSearch = search.value;
  const userPick = songList.filter((el) => {
    if (el.title.toLowerCase().includes(userSearch.toLowerCase()
    .trim()
    .replace("46", "forty six").replace("and", "&")) || el.artist.toLowerCase().includes(userSearch.toLowerCase().trim())) {
      return el;
    }
  })
  tableBody.innerHTML = "";
  populateTable(userPick);
})

randomSong.addEventListener("click", function(e){
  // preventDefault prevents the link from reloading the page
  e.preventDefault();
  let randomNum = getRandomInt(numOfSongs);
  let song = [(songList[randomNum])];
  tableBody.innerHTML = '';
  populateTable(song);
  // show random song in the input
  search.value = songList[randomNum].title;
});

// click listener on artist header to sort list by artist name and toggle sort icons
artistHeader.addEventListener("click", function(){
  orderIcon[1].classList.remove(...iconClasses);
  orderIcon[1].classList.add("songlist__head-icon--unsorted");
  tableBody.innerHTML = "";
  headRow.classList.add("songlist__head-row--artist-clicked");

  // if artist icon is the unsorted icon
  if (orderIcon[0].classList.contains("songlist__head-icon--unsorted")) {
    // remove unsorted class/icon
    orderIcon[0].classList.remove("songlist__head-icon--unsorted");
    // add sorted class/icon
    orderIcon[0].classList.add("songlist__head-icon--sorted");
    // run function to alphabetize song list by artist
    sortByArtist(songList);
  } else if (orderIcon[0].classList.contains("songlist__head-icon--sorted")) {
    // remove sorted icon, add reverse sort icon
    orderIcon[0].classList.remove("songlist__head-icon--sorted");
    orderIcon[0].classList.add("songlist__head-icon--reversed");
    reverseSortByArtist(songList);
  } else if (orderIcon[0].classList.contains("songlist__head-icon--reversed")) {
    //remove reverse icon, add sorted icon
    orderIcon[0].classList.remove("songlist__head-icon--reversed");
    orderIcon[0].classList.add("songlist__head-icon--sorted");
    sortByArtist(songList);
  }
  // repopulate table in new order
  populateTable(songList);
})

// click listener on song header to sort list by song title and toggle sort icons
songHeader.addEventListener("click", function(){
  // when song icon clicked, remove classes from artist icon, and set it to the unsorted icon
  orderIcon[0].classList.remove(...iconClasses);
  orderIcon[0].classList.add("songlist__head-icon--unsorted");
  tableBody.innerHTML = "";
  // remove class to change background color
  headRow.classList.remove("songlist__head-row--artist-clicked");

  if (orderIcon[1].classList.contains("songlist__head-icon--unsorted")){
    orderIcon[1].classList.remove("songlist__head-icon--unsorted");
    orderIcon[1].classList.add("songlist__head-icon--sorted");
    sortBySong(songList);

  } else if (orderIcon[1].classList.contains("songlist__head-icon--sorted")){
    orderIcon[1].classList.remove("songlist__head-icon--sorted");
    orderIcon[1].classList.add("songlist__head-icon--reversed");
    reverseSortBySong(songList);

  } else if (orderIcon[1].classList.contains("songlist__head-icon--reversed")){
    orderIcon[1].classList.remove("songlist__head-icon--reversed");
    orderIcon[1].classList.add("songlist__head-icon--sorted");
    sortBySong(songList);
  } 
  populateTable(songList);
})

init();


// Set a variable for our button element.
const scrollToTopButton = document.querySelector('.top-link');
const headRowY = headRow.getBoundingClientRect().top;

// Let's set up a function that shows our scroll-to-top button if we scroll beyond the height of the initial window.
const scrollFunc = () => {
  // Get the current scroll value
  let y = window.scrollY;
  
  // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
  if (y > 1000) {
    scrollToTopButton.className = "top-link show";
  } else {
    scrollToTopButton.className = "top-link hide";
  }
};

window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {
  // Let's set a variable for the number of pixels we are from the top of the document.
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  
  // If that number is greater than 0, we'll scroll back to 0, or the top of the document.
  // We'll also animate that scroll with requestAnimationFrame:
  // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
  if (c >= headRowY) {
    window.requestAnimationFrame(scrollToTop);
    // ScrollTo takes an x and a y coordinate.
    // Increase the '10' value to get a smoother/slower scroll!
    window.scrollTo(0, (headRowY + 5));
  }
};

// When the button is clicked, run our ScrolltoTop function above!
scrollToTopButton.onclick = function(e) {
  e.preventDefault();
  scrollToTop();
}