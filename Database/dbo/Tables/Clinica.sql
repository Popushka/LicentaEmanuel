CREATE TABLE [dbo].[Clinica] (
    [Id]           INT            IDENTITY (1, 1) NOT NULL,
    [Nume]         NVARCHAR (150) NOT NULL,
    [Descriere]    NVARCHAR (150) NOT NULL,
    [Imagine]      NVARCHAR (150) NOT NULL,
    [Adresa]       NVARCHAR (150) NOT NULL,
    [DoctorId]     INT            NOT NULL,
    [ProgramareId] INT            NULL,
    CONSTRAINT [PK_ClinicaId] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Clinica_Doctor] FOREIGN KEY ([Id]) REFERENCES [dbo].[Doctor] ([Id]),
    CONSTRAINT [FK_Clinica_ProgramarePacient] FOREIGN KEY ([ProgramareId]) REFERENCES [dbo].[ProgramarePacient] ([Id])
);

