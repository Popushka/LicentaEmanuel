CREATE TABLE [dbo].[Pacient]
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [Nume] NVARCHAR(50) NOT NULL, 
    [Prenume] NVARCHAR(50) NOT NULL, 
    [Varsta] INT NULL, 
    [Diagnostic] NVARCHAR(50) NULL, 
    [Detalii] NVARCHAR(50) NULL,
    CONSTRAINT [PK_PacientId] PRIMARY KEY ([Id]) 
)
