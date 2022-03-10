CREATE TABLE [dbo].[Clinica]
(
	[Id] INT NOT NULL IDENTITY(1,1), 
    [Nume] NVARCHAR(150) NOT NULL, 
    [Descriere] NVARCHAR(150) NOT NULL, 
    [Imagine] NVARCHAR(150) NOT NULL, 
    [Adresa] NVARCHAR(150) NOT NULL, 
    CONSTRAINT [PK_ClinicaId] PRIMARY KEY ([Id]) 
)
