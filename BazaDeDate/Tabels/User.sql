CREATE TABLE [dbo].[User]
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [Nume_Utilizator] NVARCHAR(50) NOT NULL, 
    [Parola] NVARCHAR(50) NOT NULL, 
    [Email] NVARCHAR(50) NOT NULL
    CONSTRAINT [PK_UserId] PRIMARY KEY ([Id]) 
)
