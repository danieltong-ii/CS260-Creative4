const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const multer = require('multer')
const upload = multer({
    dest: '../front-end/public/images/products',
    limits: {
        fileSize: 10000000
    }

});
// connect to the database
mongoose.connect('mongodb://localhost:27017/music_library', {
    useNewUrlParser: true
});
const songSchema = new mongoose.Schema({ //https://mongoosejs.com/
    name: String,
    artist: String,
    genre: String,
    image: String,
    FavStatus: String,
    inCart: Boolean,
    youtube: String,
});

// Create a model for items in the museum.
const Song = mongoose.model('Song', songSchema);

Song.insertMany([
    {
    name: "Savage Love",
    artist: "Jason Derulo x Jawish 685",
    genre: "Pop",
    image: 'savage.png',
    FavStatus: '🤍',
    inCart: false,
    youtube: 'https://www.youtube.com/watch?v=Jvcv8trEuao'
  },
  {
    name: "For The Night",
    artist: "Pop Smoke (feat. Lil Baby & DaBaby)",
    genre: "Rap",
    image: "night.png",
    FavStatus: '🤍',
    inCart: false,
    youtube: 'https://www.youtube.com/watch?v=Q9pjm4cNsfc'
  },
  {
    name: "positions",
    artist: "Ariana Grande",
    genre: "Pop",
    image: 'ari.png',
    FavStatus: '🤍',
    inCart: false,
    youtube: 'https://www.youtube.com/watch?v=tcYodQoapMg'
  },
  {
    name: "Golden",
    artist: "Harry Styles",
    genre: "Pop",
    image: 'golden.png',
    FavStatus: '🤍',
    inCart: false,
    youtube: 'https://www.youtube.com/watch?v=P3cffdsEXXw'
  },
  {
    name: "WAP",
    artist: "Cardi B & Megan Thee Stallion",
    genre: "Rap",
    image: 'wap.png',
    FavStatus: '🤍',
    inCart: false,
    youtube: 'https://www.youtube.com/watch?v=Wc5IbN4xw70'
  },
  {
    name: "Don't Need Friends",
    artist: "NAV (feat. Lil Baby)",
    genre: "Rap",
    image: 'nav.png',
    FavStatus: '🤍',
    inCart: false,
    youtube: 'https://www.youtube.com/watch?v=LEhVIjBOjrA'
  },
  {
    name: "Forever After All",
    FavStatus: '🤍',
    artist: "Luke Combs",
    genre: "Country",
    image: 'luke.png',
    inCart: false,
    youtube: 'https://www.youtube.com/watch?v=fmbLCMGtEQc'
  },
  {
    name: "Hawai (Remix)",
    FavStatus: '🤍',
    artist: "Maluma and The Weekend",
    genre: "Pop",
    image: 'hawai.png',
    inCart: false,
    youtube: 'https://www.youtube.com/watch?v=91vECNhvmMY'
  },
  {
    name: "34+35",
    FavStatus: '🤍',
    artist: "Ariana Grande",
    genre: "Pop",
    image: 'ari.png',
    inCart: false,
    youtube: 'https://www.youtube.com/watch?v=cnyCcF20pRo',
  },
  {
    name: "Laugh Now Cry Later",
    FavStatus: '🤍',
    artist: "Drake",
    genre: "Rap",
    image: 'drake.png',
    inCart: false,
    youtube: 'https://www.youtube.com/watch?v=JFm7YDVlqnI',
  },
  {
    name: "Lonely",
    artist: "Justin Bieber & benny blanco",
    FavStatus: '🤍',
    genre: "Pop",
    image: "lonely.png",
    inCart: false,
    youtube: 'https://www.youtube.com/watch?v=xQOO2xGQ1Pc',
  },
  {
    name: "Blinding Lights",
    FavStatus: '🤍',
    artist: "The Weeknd",
    genre: "R&B/Soul",
    image: "blinding.png",
    inCart: false,
    youtube: 'https://www.youtube.com/watch?v=4NRXx6U8ABQ',
  },
  {
    name: "you broke me first",
    FavStatus: '🤍',
    artist: "tate McRae",
    genre: "Pop",
    image: "tate.png",
    inCart: false,
    youtube: 'https://www.youtube.com/watch?v=AG-erEMhumc',
  },
  {
    name: "Dynamite",
    FavStatus: '🤍',
    artist: "BTS",
    genre: "K-Pop",
    image: "dynamite.png",
    inCart: false,
    youtube: 'https://www.youtube.com/watch?v=gdZLi9oWNZg'
  },
  {
    name: "Lemonade",
    FavStatus: '🤍',
    artist: "Internet Money & Gunna (feat. Don Toliver & NAV)",
    genre: "Rap",
    image: "lemon.png",
    inCart: false,
    youtube: 'https://www.youtube.com/watch?v=U-fcXjcJXks'
  },
  {
    name: "Levitating ",
    FavStatus: '🤍',
    artist: "Dua Lipa (feat DaBaby)",
    genre: "Pop",
    image: "lev.png",
    inCart: false,
    youtube: 'https://www.youtube.com/watch?v=TUVcZfQe-Kw'
  },
  {
    name: "Be Like That",
    FavStatus: '🤍',
    artist: "Kane Brown, Swae Lee, Khalid",
    genre: "Pop",
    image: "belikethat.png",
    inCart: false,
    youtube: 'https://www.youtube.com/watch?v=GEAy7eXb2lo',
  },
  {
    name: "Wonder",
    FavStatus: '🤍',
    artist: "Shawn Mendes",
    genre: "Pop",
    image: "wonder.png",
    inCart: false,
    youtube: 'https://www.youtube.com/watch?v=fHeQemJJQII'

  },
  {
    name: "Take You Dancing",
    FavStatus: '🤍',
    artist: "Jason Derulo",
    genre: "Pop",
    image: "dancing.png",
    inCart: false,
    youtube: 'https://www.youtube.com/watch?v=s0-f5RncxcA'
  },
  {
    name: "Holy",
    FavStatus: '🤍',
    artist: "Justin Bieber (feat. Chance the Rapper)",
    genre: "Pop",
    image: "holy.png",
    inCart: false,
    youtube: 'https://www.youtube.com/watch?v=pvPsJFRGleA'
},
  {
    name: "Watermelon Sugar",
    FavStatus: '🤍',
    artist: "Harry Styles",
    genre: "Pop",
    image: "golden.png",
    inCart: false,
    youtube: 'https://www.youtube.com/watch?v=E07s5ZYygMg'
},
  {
    name: "Circles",
    FavStatus: '🤍',
    artist: "Post Malone",
    genre: "Pop",
    image: "circles.png",
    inCart: false,
    youtube: 'https://www.youtube.com/watch?v=wXhTHyIgQ_U'
},
  {
    name: "Whats Poppin",
    FavStatus: '🤍',
    artist: "Jack Harlow",
    genre: "Rap",
    image: "jack.png",
    inCart: false,
    youtube: 'https://www.youtube.com/watch?v=HIwAI05Y1fU'
},
  {
    name: "King & Queens",
    FavStatus: '🤍',
    artist: "Ava Max",
    genre: "Pop",
    image: "king.png",
    inCart: false,
    youtube: 'https://www.youtube.com/watch?v=jH1RNk8954Q'
},
  {
    name: "ily",
    FavStatus: '🤍',
    artist: "Surf Mesa",
    genre: "Pop",
    image: "ily.png",
    inCart: false,
    youtube: 'https://www.youtube.com/watch?v=89degLrNZM8'
},
])

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/api/items', async (req, res) => {
    try {
        let items = await Song.find();
        res.send(items);
        // console.log("just sent the songs")
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.post('/api/photos', upload.single('photo'), async (req, res) => {
    // Just a safety check
        // console.log(req.file.filename);
    if (!req.file) {
        return res.sendStatus(400);
    }
    res.send({
        image: req.file.filename
    });
});

// "/images/products"

//Create a new item in the museum: takes a title and a path to an image.
app.post('/api/items', async (req, res) => {
    const item = new Song({
        name: req.body.name,
        artist: req.body.artist,
        genre: "Pop",
        image: req.body.image,
        FavStatus: "🤍",
        inCart: false,
        youtube: ""
    });
    try {
        await item.save(); // save() is a mongodb method
        res.send(item);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

//DELETE

app.delete('/api/items/:id', async (req, res) => {
    try {
        await Song.deleteOne({_id: req.params.id});
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
});

//Edit

app.put('/api/items/:id', async (req, res) => {
    try {
        let items = await Song.findOne({_id: req.params.id});
        items.name = req.body.name;
        if (req.body.artist !== null) {
            items.artist = req.body.artist;
        }
        items.save();
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
})
//
// app.put('/api/items/:id', async (req, res) => {
//     try {
//         let items = await Song.findOne({_id: req.params.id});
//         items.artist = req.body.artist;
//         items.save();
//         console.log(items);
//     } catch (error) {
//         console.log(error);
//         res.sendStatus(400);
//     }
// })

app.listen(3000, () => console.log('Server listening on port 3000!'));
