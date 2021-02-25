// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

// CLASS :
// class Pizza {
//   constructor(public name: string, public toppings: string[]) { }
// }

// const pizza = new Pizza('Inferno', ['cheese', 'peppers']);

// console.log(typeof pizza);

// INTERFACE : 
interface SquareConfig {
  color?: string;
  width?: number;
}
function setStudent(config: SquareConfig): { color: string; age: number } {
  this.studentName = config.color;
  console.log(this.studentName)
  return this.studentName
}
setStudent({ color: "8" })
// function createSquare(config: SquareConfig): { color: string; area: number } {
//   let newSquare = { color: "white", area: 100 };
//   if (config.color) {
//     newSquare.color = config.color;
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width;
//   }
//   console.log(newSquare.area)
//   return newSquare;
// }

// let mySquare = createSquare({ color: "black" });
// console.log(mySquare)


const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => {


  return (
    <Layout>
      <SEO title="Using TypeScript" />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
