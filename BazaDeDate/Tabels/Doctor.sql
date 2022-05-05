CREATE TABLE [dbo].[Doctor]
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [Nume] NVARCHAR(50) NOT NULL, 
    [Prenume] NVARCHAR(50) NOT NULL, 
    [Descriere] NVARCHAR(50) NULL, 
    [Imagine] NVARCHAR(50) NULL,
    CONSTRAINT [PK_DoctorId] PRIMARY KEY ([Id]) 
)
