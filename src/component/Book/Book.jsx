import React, { Component } from "react";
import styles from "./Book.module.scss";




class Book extends Component{
    render(){
       
    

        return(
            <section >
                    <div className={styles.author}>   
                     <div>Title :{this.props.bookData.title}</div>
                     <div>Author :{this.props.bookData.author}</div>
                     <div>Page :{this.props.bookData.pageCount}</div>
                     <img className={styles.imge} src={this.props.bookData.image}/>
                     </div>
          </section>
        )
    }
}

export default Book;