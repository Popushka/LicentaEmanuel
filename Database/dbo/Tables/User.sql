CREATE TABLE [dbo].[User] (
    [Id]                   INT           NOT NULL,
    [Nume_utilizator]      NVARCHAR (50) NOT NULL,
    [Parola]               NVARCHAR (50) NOT NULL,
    [Email]                NVARCHAR (50) NOT NULL,
    [Detalii_utilizatorId] INT           NULL,
    CONSTRAINT [PK_UserId] PRIMARY KEY ([Id])

);

