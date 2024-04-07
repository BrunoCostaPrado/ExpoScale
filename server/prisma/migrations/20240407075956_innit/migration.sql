-- CreateTable
CREATE TABLE "Weight" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Weight_pkey" PRIMARY KEY ("id")
);
