import React from 'react'
import { CardImageWrapper } from './Card.style'

function CardImage({card}) {
  return (
        <CardImageWrapper>
          {card?.card_faces ? (
            <>
              <p>{card?.card_faces[0].name}</p>
              <img
                className="cardimage"
                alt={card?.card_faces[0].name}
                src={card?.card_faces[0].image_uris?.normal}
              />
              <p>{card?.card_faces[1].name}</p>
              <img
                className="cardimage"
                alt={card?.card_faces[1].name}
                src={card?.card_faces[1].image_uris?.normal}
              />
            </>
          ) : (
              <img
                className="cardimage"
                alt={card?.name}
                src={card?.image_uris?.normal}
              />
          )}
        </CardImageWrapper>
  )
}

export default CardImage