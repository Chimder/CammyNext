-- CreateTable
CREATE TABLE "Character" (
    "name" TEXT NOT NULL,
    "zoom" INTEGER,
    "main" INTEGER,
    "img" TEXT,
    "imgActive" TEXT,
    "imgNotActive" TEXT,
    "describe" TEXT,
    "hates" TEXT,
    "likes" TEXT,
    "height" TEXT,
    "weight" TEXT,
    "img1" TEXT,
    "img2" TEXT,
    "out1" TEXT[],
    "out2" TEXT[]
);

-- CreateTable
CREATE TABLE "Video" (
    "comboName" TEXT,
    "video" TEXT NOT NULL,
    "characterName" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Special" (
    "comboName" TEXT NOT NULL,
    "img" TEXT,
    "energy" TEXT,
    "arrows" TEXT[],
    "left" INTEGER,
    "characterName" TEXT
);

-- CreateTable
CREATE TABLE "Supel" (
    "comboName" TEXT NOT NULL,
    "img" TEXT,
    "energy" TEXT,
    "arrows" TEXT[],
    "left" INTEGER,
    "characterName" TEXT
);

-- CreateTable
CREATE TABLE "Unique" (
    "comboName" TEXT NOT NULL,
    "img" TEXT,
    "energy" TEXT,
    "arrows" TEXT[],
    "left" INTEGER,
    "characterName" TEXT
);

-- CreateTable
CREATE TABLE "Throws" (
    "comboName" TEXT NOT NULL,
    "img" TEXT,
    "energy" TEXT,
    "arrows" TEXT[],
    "left" INTEGER,
    "characterName" TEXT
);

-- CreateTable
CREATE TABLE "Common" (
    "comboName" TEXT NOT NULL,
    "img" TEXT,
    "energy" TEXT,
    "left" INTEGER,
    "arrows" TEXT[],
    "characterName" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Character_name_key" ON "Character"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Video_comboName_key" ON "Video"("comboName");

-- CreateIndex
CREATE UNIQUE INDEX "Video_video_key" ON "Video"("video");

-- CreateIndex
CREATE UNIQUE INDEX "Special_comboName_key" ON "Special"("comboName");

-- CreateIndex
CREATE UNIQUE INDEX "Supel_comboName_key" ON "Supel"("comboName");

-- CreateIndex
CREATE UNIQUE INDEX "Unique_comboName_key" ON "Unique"("comboName");

-- CreateIndex
CREATE UNIQUE INDEX "Throws_comboName_key" ON "Throws"("comboName");

-- CreateIndex
CREATE UNIQUE INDEX "Common_comboName_key" ON "Common"("comboName");

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_characterName_fkey" FOREIGN KEY ("characterName") REFERENCES "Character"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Special" ADD CONSTRAINT "Special_characterName_fkey" FOREIGN KEY ("characterName") REFERENCES "Character"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Supel" ADD CONSTRAINT "Supel_characterName_fkey" FOREIGN KEY ("characterName") REFERENCES "Character"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Unique" ADD CONSTRAINT "Unique_characterName_fkey" FOREIGN KEY ("characterName") REFERENCES "Character"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Throws" ADD CONSTRAINT "Throws_characterName_fkey" FOREIGN KEY ("characterName") REFERENCES "Character"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Common" ADD CONSTRAINT "Common_characterName_fkey" FOREIGN KEY ("characterName") REFERENCES "Character"("name") ON DELETE SET NULL ON UPDATE CASCADE;
