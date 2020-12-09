<template>
<div>
    <h1>Add a Song to Our Library</h1>
    <div class="heading">
        <div class="circle">1</div>
        <h2>Add a Song (Upload an Album Cover)</h2>
    </div>
    <div class="add">
        <div class="form">
            <input v-model="name" placeholder="Title">
            <input v-model="artist" placeholder="Artist">
            <p></p>
            <input type="file" name="photo" @change="fileChanged">
            <button @click="upload">Upload</button>
        </div>
        <div class="upload" v-if="addItem">
            <h2>Song Name: {{addItem.name}}</h2>
            <h2>Artist: {{addItem.artist}}</h2>
            <img :src="'/images/products/'+addItem.image" />
        </div>
    </div>

    <div class="heading">
        <div class="circle">2</div>
        <h2>Edit/Delete an Item</h2>
    </div>
    <div class="edit">
        <div class="form">
            <input v-model="findTitle" placeholder="Search" @change="suggestions">
            <div class="suggestions" v-if="suggestions.length > 0">
                <div class="suggestion" v-for="s in suggestions" :key="s.id" @click="selectItem(s)">{{s.name}}
                </div>
            </div>
        </div>

        <div class="upload" v-if="findItem">
            <input v-model="findItem.name">
            <input v-model="findItem.artist">
            <p></p>
            <img :src="'/images/products/'+findItem.image" />
        </div>
        <div class="actions" v-if="findItem">
            <button @click="deleteItem(findItem)">Delete Item</button>
            <button @click="editItem(findItem)">Edit Title</button>
            <button @click="editItemDescription(findItem)">Edit Artist</button>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";
export default {
    name: 'Add',
    data() {
        return {
            name: "",
            artist: "",
            file: null,
            addItem: null,
            items: [],
            findTitle: "",
            findItem: null,
        }
    },
    computed: {
        suggestions() {
            let items = this.items.filter(item => item.name.toLowerCase().startsWith(this.findTitle.toLowerCase()));
            return items.sort((a, b) => a.name > b.name);
        }
    },
    created() {
        this.getItems();
    },
    methods: {
        fileChanged(event) {
            this.file = event.target.files[0];
        },
        async upload() {
            console.log(this.file);
            try {
                const formData = new FormData();
                formData.append('photo', this.file, this.name)
                console.log(this.file.name);
                let r1 = await axios.post('/api/photos', formData);
                let r2 = await axios.post('/api/items', {
                    name: this.name,
                    artist: this.artist,
                    image: r1.data.image
                });
                this.addItem = r2.data;
            } catch (error) {
                console.log(error);
            }
        },
        async getItems() {
            try {
                let response = await axios.get("/api/items");
                this.items = response.data;
                return true;
            } catch (error) {
                console.log(error);
            }
        },
        selectItem(item) {
            this.findTitle = "";
            this.findItem = item;
        },
        async deleteItem(item) {
            try {
                await axios.delete("/api/items/" + item._id);
                this.findItem = null;
                this.getItems();
                return true;
            } catch (error) {
                console.log(error);
            }
        },
        async editItem(item) {
            try {
                await axios.put("/api/items/" + item._id, {
                    name: this.findItem.name,
                });
                this.findItem = null;
                this.getItems();
                return true;
            } catch (error) {
                console.log(error);
            }
        },
        async editItemDescription(item) {
            try {
                await axios.put("/api/items/" + item._id, {
                    artist: this.findItem.artist,
                });
                this.findItem = null;
                this.getItems();
                return true;
            } catch (error) {
                console.log(error);
            }
        },
    }
}
</script>


<style scoped>
.image h2 {
    font-style: italic;
    font-size: 1em;
}

.footer {
    left: 0;
    right: 0;
    bottom: 0;
    width: 100;
    font-size: 20px;
    text-align: center;
    background-color: #11161c;
    color: white;
    margin-top: 100px;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
}


.heading {
    display: flex;
    margin-bottom: 20px;
    margin-top: 20px;
}

h1 {
    color: white;
}

.heading h2 {
    margin-top: 8px;
    margin-left: 10px;
    color: white;
}

.add,
.edit {
    display: flex;
}

.circle {
    border-radius: 50%;
    width: 43px;
    height: 43px;
    padding: 8px;
    background: #ff375f;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    text-align: center
}

/* Form */
input,
textarea,
select,
button {
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
}

.form {
    margin-right: 50px;
    font-size: 20px;
    font-weight: bold;
}

/* Uploaded images */
.upload h2 {
    margin: 0px;
    color: white;
}

.upload img {
    max-width: 300px;
}

/* Suggestions */
.suggestions {
    width: 200px;
    border: 1px solid #ccc;
    background: white;
}

.suggestion {
    min-height: 20px;
}

.suggestion:hover {
    background-color: #5BDEFF;
    color: #fff;
}
</style>
