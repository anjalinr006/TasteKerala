from django.db import models

# Create your models here.


def image_handler(instance,file):
    return "media/{category}/{filename}".format(category=instance.category, filename=file)


class Category(models.Model):
    Name = models.CharField(verbose_name='Category', max_length=10000, )
    created_date = models.DateTimeField(verbose_name='Created Time', auto_now_add=True)


CATEGORY = (
            ('Non-veg', 'Non-veg'),
            ('Veg', 'Veg'),
            ('BreakFast', 'BreakFast'),
            ('Lunch', 'Lunch'),
            ('Dinner', 'Dinner'),
            ('Salad', 'Salad'),
            ('Sweet', 'Sweet'),
            ('Pudding', 'Pudding'),
            ('Soup', 'Soup'),
            ('Snacks', 'Snacks'),

            )

# CATEGORY = Category.objects.all()


class FoodItem(models.Model):
    tittle = models.CharField(max_length=1000000, verbose_name='Tittle')
    description = models.TextField(max_length=1000000000, verbose_name='Description')
    published_date = models.DateTimeField(verbose_name='Published Time', auto_now_add=True)
    image = models.ImageField(verbose_name='Image', upload_to=image_handler)
    category = models.CharField(verbose_name='Category', max_length=100000, choices=CATEGORY)
    author = models.CharField(verbose_name='Author', max_length=10000)
    tag = models.CharField(max_length=10000, verbose_name='Tag')

    def __str__(self):

        return self.tittle


class CommentsViews(models.Model):
    FoodItem = models.ForeignKey(FoodItem, null=True, on_delete=models.SET_NULL)
    views = models.IntegerField(verbose_name='Views', default=0, blank=True)
    Comments = models.CharField(verbose_name='Comments', max_length=100000)
    name = models.CharField(verbose_name='Name', max_length=1000)
    email = models.EmailField(verbose_name='Email')
    like = models.IntegerField(verbose_name='Title', default='0', blank=True)
    approved_comment = models.BooleanField(default=False)
    parent = models.IntegerField(default=0)
