CREATE TABLE [dbo].[Programare]
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [Data_Programarii] NVARCHAR(50) NOT NULL, 
    [Detalii_Aditionale] NVARCHAR(50) NULL
    CONSTRAINT [PK_ProgramareId] PRIMARY KEY ([Id]) 
)
