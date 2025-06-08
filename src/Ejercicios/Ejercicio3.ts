export class Cancion{
    titulo:string
    generoCancion:string
    private autor:string

    constructor(titulo:string, generoCancion:string){
        this.titulo = titulo
        this.generoCancion = generoCancion
        this.autor = ""
    }
    
    setAutor(autor:string){
        this.autor = autor;
    }

    getAutor(){
        return `El autor de la cancion es ${this.autor}`;
    }

    getPropiedades(){
        return `El titulo de la cancion es ${this.titulo}
El genero es ${this.generoCancion} y el autor es ${this.autor}`
    }

}