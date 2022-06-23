// import React from 'react'
// import { PrismicRichText } from '@prismicio/react'

// const Text = ({ slice }) => (
//   <section>
//     <span className="title">
//       {
//         slice.primary.title ?
//         <PrismicRichText field={slice.primary.title}/>
//         : <h2>Template slice, update me!</h2>
//       }
//     </span>
//     {
//       slice.primary.description ?
//       <PrismicRichText field={slice.primary.description}/>
//       : <p>start by editing this slice from inside Slice Machine!</p>
//     }
//     <style jsx>{`
//         section {
//           max-width: 600px;
//           margin: 4em auto;
//           text-align: center;
//         }
//         .title {
//           color: #8592e0;
//         }
//     `}</style>
//   </section>
// )

// export default Text

// slices/Text/index.js

import { PrismicRichText } from '@prismicio/react'
import styles from '../../styles/Home.module.css'

const Text = ({ slice }) => (
  <section className={styles.description}>
    <PrismicRichText
      field={slice.primary.text}
      components={{
        heading1: ({ children }) => (
          <h1 className={styles.title}>{children}</h1>
        ),
      }}
    />
  </section>
)

export default Text