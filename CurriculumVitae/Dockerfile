FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src 
COPY CurriculumVitae.csproj .
RUN dotnet restore "CurriculumVitae.csproj"
COPY . .
RUN dotnet publish "CurriculumVitae.csproj" -c Release -o /publish

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS final
WORKDIR /app
COPY --from=build /publish .

ENTRYPOINT ["dotnet", "CurriculumVitae.dll"]