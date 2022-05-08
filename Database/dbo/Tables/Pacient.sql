CREATE TABLE [dbo].[Pacient] (
    [Id]              INT           NOT NULL,
    [Nume]            NVARCHAR (50) NOT NULL,
    [Prenume]         NVARCHAR (50) NOT NULL,
    [Varsta]          INT           NULL,
    [Diagnostic]      NVARCHAR (50) NULL,
    [Detalii]         NVARCHAR (50) NULL,
    [UserId]          INT           NOT NULL,
    [PacientCNP]      BIGINT        NULL,
    [Nume_utilizator] NVARCHAR (50) NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Pacient_User] FOREIGN KEY ([UserId]) REFERENCES [dbo].[User] ([Id])
);

