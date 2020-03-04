import React, {Component} from "react";
// import Post  from './component/BlogPost/Post';
import './BlogPost.css';
import Post from "../../component/BlogPost/Post";

class BlogPost extends Component{
    render () {
        return(
            <div class="post-artikel">
            <h2>Daftar Artikel</h2>
            <Post judul="JTI Polinema" isi="Jurusan Teknologi Informasi - Politeknik Negeri Malang"/>
            {/* <div class="artikel">
                <div class="gambar-artikel">
                    <img src="http://placeimg.com/80/80/tech" alt="Gambar Tumbnail Artikel"/>
                </div>
                <div class="konten-artikel">
                    <div class="judul-artikel">Judul Artikel</div>
                    <p class="isi-artikel">Isi Artikel</p>
                </div>
            </div> */}

            </div>
            
        )
    }
}

export default BlogPost;