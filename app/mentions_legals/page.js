"use client"

import Link from "next/link"
import styled from "styled-components"

const MentionsStylded = styled.section`
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 2rem;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export default function Mentions() {
  return (
    <MentionsStylded>
      <Link href={"/"}>Retour à l&apos;accueil</Link>
      <h2>Mentions Légales</h2>
      <p>Ici ajouter les mentions legales</p>
      <h2>Conditions Générals d&apos;utilisation</h2>
      <p>Ici ajouter les CGU</p>
    </MentionsStylded>
  )
}
