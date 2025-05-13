import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/languages', async (req, res) => {
  try {
    const languages = await prisma.language.findMany();
    res.json(languages);
  } catch (error) {
    console.error('Error fetching languages:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/difficulty-levels', async (req, res) => {
  try {
    const levels = await prisma.difficultyLevel.findMany();
    res.json(levels);
  } catch (error) {
    console.error('Error fetching difficulty levels:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/vocabulary', async (req, res) => {
  try {
    const { languageId, difficultyId } = req.query;
    const where = {} as any;

    if (languageId) where.languageId = Number(languageId);
    if (difficultyId) where.difficultyId = Number(difficultyId);

    const vocabulary = await prisma.vocabulary.findMany({
      where,
      include: {
        language: true,
        difficulty: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    res.json(vocabulary);
  } catch (error) {
    console.error('Error fetching vocabulary:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/vocabulary/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const vocabulary = await prisma.vocabulary.findUnique({
      where: { id: Number(id) },
      include: {
        language: true,
        difficulty: true,
      },
    });

    if (!vocabulary) {
      return res.status(404).json({ error: 'Vocabulary not found' });
    }

    res.json(vocabulary);
  } catch (error) {
    console.error('Error fetching vocabulary item:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 