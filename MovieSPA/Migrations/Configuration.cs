namespace MovieSPA.Migrations
{
    using MovieSPA.Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<MovieSPA.Models.MovieSPAContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(MovieSPA.Models.MovieSPAContext context)
        {
            context.Movies.AddOrUpdate(
                        x => x.Title,
                        new Movie() { Title = "Maximum Payback", Year = 1990, Genre = "Action", Rating = "PG-13" },
                        new Movie() { Title = "Inferno of Retribution", Year = 2005, Genre = "Action", Rating = "PG" },
                        new Movie() { Title = "Fatal Vengeance 2", Year = 2012, Genre = "Action", Rating = "PG-13" },
                        new Movie() { Title = "Sudden Danger", Year = 2012, Genre = "Action", Rating = "PG-13" },
                        new Movie() { Title = "Forgotten Doors", Year = 2009, Genre = "Drama", Rating = "R" },
                        new Movie() { Title = "Blue Moon June", Year = 1998, Genre = "Drama", Rating = "PG-13" },
                        new Movie() { Title = "The Edge of the Sun", Year = 1977, Genre = "Drama", Rating = "PG-13" },
                        new Movie() { Title = "The Nameless Sword", Year = 2010, Genre = "Fantasy", Rating = "PG" },
                        new Movie() { Title = "Guardian of the Vanished Mountain", Year = 1965, Genre = "Fantasy", Rating = "G" },
                        new Movie() { Title = "The Nameless Sword II: Skull Valley", Year = 2013, Genre = "Fantasy", Rating = "PG-13" },
                        new Movie() { Title = "Nightmare Zombie", Year = 2002, Genre = "Horror", Rating = "R" },
                        new Movie() { Title = "Zombie Spider Queen", Year = 1952, Genre = "Horror", Rating = "PG" },
                        new Movie() { Title = "Mutant Darkness", Year = 1996, Genre = "Horror", Rating = "R" }
                        );
        }
    }
}
