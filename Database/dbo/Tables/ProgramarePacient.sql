CREATE TABLE [dbo].[ProgramarePacient] (
    [Id]                 INT           NOT NULL,
    [Data_Programarii]   NVARCHAR (50) NOT NULL,
    [Detalii_Aditionale] NVARCHAR (50) NULL,
    [PacientId]          INT           NOT NULL,
    [DoctorId]           INT           NOT NULL,
    CONSTRAINT [PK_ProgramarePacient] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_ProgramarePacient_Pacient] FOREIGN KEY ([PacientId]) REFERENCES [Pacient]([Id])
);

