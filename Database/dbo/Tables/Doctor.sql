CREATE TABLE [dbo].[Doctor] (
    [Id]         INT           NOT NULL,
    [Nume]       NVARCHAR (50) NOT NULL,
    [Prenume]    NVARCHAR (50) NOT NULL,
    [Descriere]  NVARCHAR (50) NULL,
    [Imagine]    NVARCHAR (50) NULL,
    [UserId]     INT           NOT NULL,
    [Cod_parafa] NVARCHAR (50) NOT NULL,
    CONSTRAINT [PK__Doctor__3214EC07278F2C34] PRIMARY KEY CLUSTERED ([Id] ASC)
);

