CREATE TABLE [dbo].[RegistrationCode] (
    [RegistrationCodeId] INT          NOT NULL,
    [Code]               VARCHAR (50) NOT NULL,
    [CreatedByUserId]    INT          NOT NULL,
    [UserId]             INT          NOT NULL,
    [Used]               BIT          NOT NULL,
    CONSTRAINT [PK_RegistrationCode] PRIMARY KEY CLUSTERED ([RegistrationCodeId] ASC)
);

