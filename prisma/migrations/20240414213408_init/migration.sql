-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "userStatus" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "city" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "city_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "branch" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "branch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "register" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone" VARCHAR(12) NOT NULL,
    "text" VARCHAR(255) NOT NULL,
    "userId" INTEGER NOT NULL,
    "cityId" INTEGER NOT NULL,
    "branchId" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "register_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "client" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "status" VARCHAR(50) NOT NULL,
    "phone" VARCHAR(20) NOT NULL,
    "nationality" VARCHAR(50) NOT NULL,
    "maritalStatus" VARCHAR(50) NOT NULL,
    "mother" VARCHAR(50) NOT NULL,
    "father" VARCHAR(50) NOT NULL,
    "rg" VARCHAR(50) NOT NULL,
    "cpf" VARCHAR(50) NOT NULL,
    "cityBirth" VARCHAR(50) NOT NULL,
    "stateBirth" VARCHAR(50) NOT NULL,
    "urlImg" TEXT NOT NULL DEFAULT '',
    "process" VARCHAR(20) NOT NULL,
    "address" JSONB NOT NULL,
    "documents" JSONB NOT NULL,
    "comments" JSONB NOT NULL,
    "userId" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "client_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "register" ADD CONSTRAINT "register_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register" ADD CONSTRAINT "register_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "city"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register" ADD CONSTRAINT "register_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "branch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "client" ADD CONSTRAINT "client_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
