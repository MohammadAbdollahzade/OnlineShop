# Generated by Django 4.2 on 2023-06-05 10:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_alter_customers_customer_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customers',
            name='customer_id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
