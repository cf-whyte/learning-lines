import React from 'react'

const scripts = [
  {
    title: 'Thinning',
    description: 'Six friends head to an apple orchard for the summer to make some money and spend their last bit of youth enjoying' +
    ' each others company and creating new memories. Throughout a summer of wild experiences, intimacy, love, challenges,' +
    ' disagreement and unity these friends all form unique bonds with one another.',
    author: 'Eli Kent, 2010',
    characters: [
      {
        name: 'Troy',
        age: 18
      },
      {
        name: 'Adam',
        age: 18
      },
      {
        name: 'Isaac',
        age: 19
      },
      {
        name: 'Lily',
        age: 18
      },
      {
        name: 'Mel',
        age: 26
      },
      {
        name: 'Billie',
        age: 19
      },
      {
        name: 'Fraggle',
        age: 17
      }]
  },
  {
    title: 'As You Like It',
    description: 'As You Like It spoofs many of the conventions of poetry and literature dealing with love, such as the idea that love is a disease that brings suffering and torment to the lover, or the assumption that the male lover is the slave or servant of his mistress. ',
    author: 'William Shakespeare, 1603',
    characters: [
      {
        name: 'Rosalind',
        age: 18
      },
      {
        name: 'Orlando',
        age: 18
      },
      {
        name: 'Duke Senior',
        age: 19
      },
      {
        name: 'Jaques',
        age: 18
      },
      {
        name: 'Celia',
        age: 26
      },
      {
        name: 'Duke Frederick',
        age: 45
      },
      {
        name: 'Touchstone',
        age: 32
      },
      {
        name: 'Oliver',
        age: 28
      }
    ]
  },
  {
    title: 'A Christmas Carol',
    description: 'A Christmas Carol recounts the story of Ebenezer Scrooge, an elderly miser who is visited by the ghost of his former business partner Jacob Marley and the spirits of Christmas Past, Present and Yet to Come. After their visits, Scrooge awakens on Christmas morning a changed man, embodying the spirit of Christmas.',
    author: 'Charles Dickens, 1843',
    characters: [
      {
        name: 'Scrooge',
        age: 70
      },
      {
        name: 'Jacob Marley',
        age: 73
      },
      {
        name: 'Ghost-Past',
        age: 200
      },
      {
        name: 'Ghost-Present',
        age: 85
      },
      {
        name: 'Ghost-Future',
        age: -12
      }
    ]
  }]

function ScriptSelect () {
  return (
    <>
      {/* <Tabs/> */}

      <div className="container p-3">
        <div className="columns is-centered">
          <div className="column is-one-fifth">
            <div className="box has-background-primary-light">
              <p className=""><strong>Info:</strong> Read through the script descrtiptions and then select a character whos lines you want to learn.</p>
            </div>
          </div>
          {
            scripts.map(script => {
              return (
                <div key={script.title} className="column">
                  <div className="box">
                    <p className="title">{script.title}</p>
                    <p><strong>By:</strong> {script.author}</p>
                    <p><strong>Description:</strong> {script.description}</p>
                    <p><strong>Characters:</strong> </p>
                    <div className="buttons is-centered">
                      {
                        script.characters.map(character => {
                          return (
                            <>
                              <br/>
                              <button key={character.name}
                                className="button is-primary is-outlined is-rounded">
                                {character.name}
                              </button>
                            </>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default ScriptSelect
