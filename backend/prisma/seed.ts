import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create languages
  const english = await prisma.language.create({
    data: {
      name: 'English',
      code: 'en',
    },
  })

  const spanish = await prisma.language.create({
    data: {
      name: 'Spanish',
      code: 'es',
    },
  })

  // Create difficulty levels
  const beginner = await prisma.difficultyLevel.create({
    data: {
      name: 'Beginner',
      description: 'Basic vocabulary for beginners',
    },
  })

  const intermediate = await prisma.difficultyLevel.create({
    data: {
      name: 'Intermediate',
      description: 'More complex vocabulary for intermediate learners',
    },
  })

  const advanced = await prisma.difficultyLevel.create({
    data: {
      name: 'Advanced',
      description: 'Advanced vocabulary for proficient speakers',
    },
  })

  // Create vocabulary items
  const vocabularyItems = [
    {
      word: 'Ephemeral',
      translation: 'Efímero',
      definition: 'Lasting for a very short time',
      example: 'The beauty of cherry blossoms is ephemeral, lasting only a few days each spring.',
      languageId: english.id,
      difficultyId: advanced.id,
    },
    {
      word: 'Ubiquitous',
      translation: 'Ubicuo',
      definition: 'Present, appearing, or found everywhere',
      example: 'Smartphones have become ubiquitous in modern society.',
      languageId: english.id,
      difficultyId: intermediate.id,
    },
    {
      word: 'Serendipity',
      translation: 'Serendipia',
      definition: 'The occurrence of events by chance in a happy or beneficial way',
      example: 'Finding this rare book was pure serendipity.',
      languageId: english.id,
      difficultyId: advanced.id,
    },
  ]

  for (const item of vocabularyItems) {
    await prisma.vocabulary.create({
      data: item,
    })
  }

  console.log('Database has been seeded!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 